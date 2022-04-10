import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import createAuthRefreshInterceptor, {AxiosAuthRefreshRequestConfig} from 'axios-auth-refresh';
import AuthorizationContextHolder from "./objects/AuthorizationContextHolder";
import {Observable, Observer, Unsubscribe} from "redux";

enum TokenState {
    Initialized = "INITIALIZED",
    Destroyed = "DESTROYED"
}

export interface TokenObservable extends Observable<TokenState> {

    subscribe(observer: Observer<TokenState>): { unsubscribe: Unsubscribe }

    [Symbol.observable](): Observable<TokenState>
}

export class TokenStorage implements AuthorizationContextHolder, TokenObservable {

    private static ACCESS_TOKEN_KEY: string = 'access_token'

    private static REFRESH_TOKEN_KEY: string = 'refresh_token'

    private readonly subscribers: Array<Observer<TokenState>> = []

    constructor() {
        if (typeof window === 'undefined') {
            return
        }
        console.log("State",
            this.getAccessToken(),
            this.getRefreshToken()
        )
    }

    getAccessToken(): string | null {
        return typeof window === 'undefined' ? null : localStorage.getItem(TokenStorage.ACCESS_TOKEN_KEY)
    }

    getRefreshToken(): string | null {
        return typeof window === 'undefined' ? null : localStorage.getItem(TokenStorage.REFRESH_TOKEN_KEY)
    }

    updateTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem(TokenStorage.ACCESS_TOKEN_KEY, accessToken)
        localStorage.setItem(TokenStorage.REFRESH_TOKEN_KEY, refreshToken)
        this.callSubscribers(TokenState.Initialized)
    }


    destroy() {
        localStorage.removeItem(TokenStorage.ACCESS_TOKEN_KEY)
        localStorage.removeItem(TokenStorage.REFRESH_TOKEN_KEY)
        this.callSubscribers(TokenState.Destroyed)
    }

    private callSubscribers(tokenState: TokenState) {
        this.subscribers.forEach((observer) => {
            try {
                if (observer.next !== undefined) {
                    observer.next(tokenState)
                }
            } catch (e) {
                console.error("Some observer, error", e)
            }
        })
    }

    subscribe(observer: Observer<TokenState>): { unsubscribe: Unsubscribe } {

        this.subscribers.push(observer);
        return {
            unsubscribe: () => {
                const index = this.subscribers.indexOf(observer, 0);
                if (index > -1) {
                    this.subscribers.splice(index, 1);
                }
            }
        }
    }

    [Symbol.observable](): Observable<TokenState> {
        return this;
    }


}

export default class HttpClient {

    private readonly axiosInstance: AxiosInstance;
    private readonly tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage, baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl
        })
        this.tokenStorage = tokenStorage
        this.initializeAxiosOAAuth()
    }

    private initializeAxiosOAAuth() {

        this.axiosInstance.interceptors.request.use(request => {
            // @ts-ignore
            request.headers['Authorization'] = `Bearer ${this.tokenStorage.getAccessToken()}`;
            return request;
        });

        createAuthRefreshInterceptor(this.axiosInstance, (failedRequest) => {
            const refreshToken: string | null = this.tokenStorage.getRefreshToken();

            if (refreshToken === null) {
                return Promise.reject(failedRequest)
            }

            if (failedRequest.response.status === 400 && !failedRequest.request.responseURL.endsWith("oAuth/check")) {
                return Promise.reject(failedRequest)
            }

            const params = new URLSearchParams({
                grant_type: `refresh_token`,
                refresh_token: refreshToken
            })

            return this.axiosInstance.post('/oAuth/update', params)
                .then(tokenRefreshResponse => {
                    this.tokenStorage.updateTokens(
                        tokenRefreshResponse.data.access_token,
                        tokenRefreshResponse.data.refresh_token
                    );
                    if (failedRequest.request.responseURL.endsWith("oAuth/check")) {
                        failedRequest.response.config.data=`token=${this.tokenStorage.getAccessToken()}`
                    } else {
                        failedRequest.response.config.headers['Authorization'] = `Bearer ${this.tokenStorage.getAccessToken()}`;
                    }
                    return Promise.resolve();
                })
                .catch((e) => {
                    console.log(e)
                    this.tokenStorage.destroy()
                    return Promise.reject(failedRequest)
                });


        }, {
            retryInstance: this.axiosInstance,
            statusCodes: [401, 400]
        });
    }


    public get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.axiosInstance.get(url, config)
    }

    public delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.axiosInstance.delete(url, config)
    }

    public post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosAuthRefreshRequestConfig): Promise<R> {
        return this.axiosInstance.post(url, data, config)
    }

    public put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.axiosInstance.put(url, data, config)
    }

    public patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.axiosInstance.patch(url, data, config)
    }
}