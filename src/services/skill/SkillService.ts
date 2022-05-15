import SkillApi from "../../api/skill/SkillApi";
import Language from "../../api/skill/objects/Language";

export default class SkillService {
    private readonly api: SkillApi;

    constructor(api: SkillApi) {
        this.api = api;
    }


    public getSkills(): Promise<Array<Language>> {
        return this.api.getSkills()
    }

}