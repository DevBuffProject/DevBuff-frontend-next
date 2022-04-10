import HttpClient from "../http/HttpClient";
import OAuth from "./objects/OAuth";

export enum GrantType {
    GitHub = "github",
    GitLab = "gitlab"
}

export default class AuthorizationApi {

    private readonly httpClient: HttpClient

    private readonly clientType: string

    constructor(httpClient: HttpClient, clientType: string) {
        this.httpClient = httpClient;
        this.clientType = clientType
    }

    async oAuth(code: string, grantType: GrantType):Promise<OAuth> {
        let params = new URLSearchParams({code: code, grant_type: `${grantType}_oauth`, clientType: this.clientType})
        const res = await this.httpClient.post('/oAuth', params)
        return res.data
    }



    async checkUser(accessToken: string) {
        console.log("TOKEN!", accessToken)
        const params = new URLSearchParams({
            token: accessToken
        })
        const response = await this.httpClient.post("/oAuth/check", params)
        return response.data
    }
}