import HttpClient from "../http/HttpClient";
import CountUnreadNotification from "./objects/CountUnreadNotification";
import Notifications from "./objects/Notifications";

export default class NotificationApi {

    private static readonly BASE_PATH: string = "/notifications"

    private readonly httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Get user notifications per page
     */
    async getNotifications(page: number): Promise<Notifications> {
        const response = await this.httpClient.get<Notifications>(`${NotificationApi.BASE_PATH}`, {
            params: {
                page: page
            }
        })
        return response.data
    }

    /**
     * Get count unread notifications for current user
     */
    async getCountUnreadNotifications(): Promise<bigint> {
        const response = await this.httpClient.get<CountUnreadNotification>(`${NotificationApi.BASE_PATH}/unread`)
        return response.data.count
    }

    /**
     * Confirm email by token
     * @param token secret value for confirmation email
     */
    async confirmEmail(token: string): Promise<void> {
        const response = await this.httpClient.get<void>(`${NotificationApi.BASE_PATH}/email/confirm`, {
            params: {
                token: token
            }
        })
        return response.data

    }

}