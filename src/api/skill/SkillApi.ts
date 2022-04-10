import Language from "./objects/Language";
import HttpClient from "../http/HttpClient";

export default class SkillApi {

    private readonly httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }


    public async getSkills(): Promise<Array<Language>> {
        const result = await this.httpClient.get<Array<Language>>('/skills')
        return result.data
    }


}