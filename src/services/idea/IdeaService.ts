import IdeaApi, {SortType} from "../../api/idea/IdeaApi";
import IdeaSearchResult from "../../api/idea/objects/IdeaSearchResult";
import SelfIdea from "../../api/idea/objects/SelfIdea";
import FileApi from "../../api/file/FileApi";
import {IdeaSortSpecialists, IdeasSortLanguages} from "../../api/idea/objects/IdeaSortParams";

export default class IdeaService {

    private readonly api: IdeaApi;
    private readonly fileApi: FileApi;

    constructor(api: IdeaApi, fileApi: FileApi) {
        this.api = api;
        this.fileApi = fileApi
    }

    public getLogo(ideaId: string): string {
        return this.fileApi.getIdeaLogo(ideaId)
    }

    public getIdeasSelf(): Promise<Array<SelfIdea>> {
        return this.api.getSelfIdeas()
    }

    public getIdeasByParams(page : number, specialists : Array<IdeaSortSpecialists>,languages : Array<IdeasSortLanguages>): Promise<IdeaSearchResult> {
        return this.api.getIdeas(page, SortType.Date,specialists,languages)
    }
}