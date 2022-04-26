import IdeaApi, {SortType} from "../../api/idea/IdeaApi";
import IdeaSearchResult from "../../api/idea/objects/IdeaSearchResult";
import SelfIdea from "../../api/idea/objects/SelfIdea";
import FileApi from "../../api/file/FileApi";
import {OwnerIdea} from "../../api/idea/objects/OwnerIdea";

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

    public getIdeasOwner(ownerUUID: string) : Promise<Array<OwnerIdea>> {
        return this.api.getOwnerIdeas(ownerUUID)
    }

    public getIdeasSelf(): Promise<Array<SelfIdea>> {
        return this.api.getSelfIdeas()
    }

    public getIdeasByParams(page : number, specialists : Array<string>,languages : Array<string>): Promise<IdeaSearchResult> {
        return this.api.getIdeas(page, SortType.Date,specialists,languages)
    }
}