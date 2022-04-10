import SkillDump from "./objects/SkillDump";
import HttpClient from "../http/HttpClient";

/**
 * API provider of DevBuff Skill manager service.
 * Provide some method's for controlling skill tree.
 */
export default class SkillManagerData {

    private static readonly BASE_PATH: string = "/skills/manager";

    private readonly httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }


    public async getManagerData(): Promise<SkillDump> {
        const result = await this.httpClient.get<SkillDump>(`${(SkillManagerData.BASE_PATH)}/data`)
        return result.data
    }

    /**
     * Add a new technology
     * @param newTechnology
     */
    public async addTechnology(newTechnology: string) {
        await this.httpClient.patch(`${(SkillManagerData.BASE_PATH)}/framework`, {
            frameworkName: newTechnology
        })
    }

    /**
     * Delete technology
     * @param targetTechnology
     */
    public async deleteTechnology(targetTechnology: string) {
        await this.httpClient.delete(`${(SkillManagerData.BASE_PATH)}/framework`, {
            data: {
                frameworkName: targetTechnology
            }
        })
    }

    /**
     * Add a new language
     * @param newLanguage
     */
    public async addLanguage(newLanguage: string) {
        await this.httpClient.patch(`${(SkillManagerData.BASE_PATH)}/language`, {
            languageName: newLanguage
        })
    }

    /**
     * Delete language
     * @param targetLanguage
     */
    public async deleteLanguage(targetLanguage: string) {
        await this.httpClient.delete(`${(SkillManagerData.BASE_PATH)}/language`, {
            data: {
                languageName: targetLanguage
            }
        })
    }

    /**
     * Add a new specialist
     * @param newSpecialist
     */
    public async addSpecialist(newSpecialist: string) {
        await this.httpClient.patch(`${(SkillManagerData.BASE_PATH)}/specialist`, {
            specialistName: newSpecialist
        })
    }

    /**
     * Delete specialist
     * @param targetSpecialist
     */
    public async deleteSpecialist(targetSpecialist: string) {
        await this.httpClient.delete(`${(SkillManagerData.BASE_PATH)}/specialist`, {
            data: {
                specialistName: targetSpecialist
            }
        })
    }

    /**
     * Associate specialist to language
     * @param language target language
     * @param specialist specialist
     */
    public async associateSpecialist(language: string, specialist: string) {
        await this.httpClient.patch(`${(SkillManagerData.BASE_PATH)}/tree/specialist`, {
            languageName: language,
            specialistName: specialist,
        })
    }

    /**
     * Dissociate specialist from language
     * @param language target language
     * @param specialist specialist
     */
    public async dissociateSpecialist(language: string, specialist: string) {
        await this.httpClient.delete(`${(SkillManagerData.BASE_PATH)}/tree/specialist`, {
            data: {
                languageName: language,
                specialistName: specialist,
            }
        })
    }


}