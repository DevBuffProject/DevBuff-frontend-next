import HttpClient from "../http/HttpClient";
import OAuth from "./objects/OAuth";
import User from "./objects/User";

export enum TypeProvider {
    GitHub = "github",
    GitLab = "gitlab"
}

export default class AuthorizationApi {

    private readonly basePath: string = "/oAuth"

    private readonly httpClient: HttpClient

    private readonly clientType: string

    constructor(httpClient: HttpClient, clientType: string) {
        this.httpClient = httpClient;
        this.clientType = clientType
    }

    async oAuth(code: string, typeProvider: TypeProvider): Promise<OAuth> {
        let params = new URLSearchParams({code: code, grant_type: `${typeProvider}_oauth`, clientType: this.clientType})
        const res = await this.httpClient.post(this.basePath, params)
        return res.data
    }

    /**
     * Build link for authorization
     * @param typeProvider type of oauth resource
     */
    buildAuthorizationLink(typeProvider: TypeProvider): string {
        return `${this.httpClient.getBaseUrl()}${this.basePath}/external/init/${typeProvider}/client/${this.clientType}`
    }


    async checkUser(accessToken: string): Promise<User> {
        const params = new URLSearchParams({
            token: accessToken
        })
        const response = await this.httpClient.post("/oAuth/check", params)
        return response.data
    }
}