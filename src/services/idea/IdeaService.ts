import IdeaApi, {SortType} from "../../api/idea/IdeaApi";
import IdeaSearchResult from "../../api/idea/objects/IdeaSearchResult";
import SelfIdea from "../../api/idea/objects/SelfIdea";

export default class IdeaService {

    private readonly api: IdeaApi;

    constructor(api: IdeaApi) {
        this.api = api;
    }

    public getIdeasSelf () : Promise<Array<SelfIdea>> {
        return this.api.getSelfIdeas()
    }

    public getIdeasByParams(): Promise<IdeaSearchResult> {
        return this.api.getIdeas(1, SortType.Date, ["back-end", "front-end"], ["JavaScript", "Java"])
    }
}