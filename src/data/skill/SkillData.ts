import {Axios} from "axios";
import Language from "./objects/Language";

export default class SkillData {

    private readonly httpClient: Axios

    //TODO based API
    constructor(httpClient: Axios) {
        this.httpClient = httpClient
    }


    public async getSkills(): Promise<Array<Language>> {
        const result = await this.httpClient.get<Array<Language>>('/skills')
        return result.data
    }


}