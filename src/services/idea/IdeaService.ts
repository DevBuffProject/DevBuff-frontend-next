import IdeaApi, {SortType} from "../../api/idea/IdeaApi";
import IdeaSearchResult from "../../api/idea/objects/IdeaSearchResult";

export default class IdeaService {

    private readonly api: IdeaApi;

    constructor(api: IdeaApi) {
        this.api = api;
    }

    public getIdeasByParams(): Promise<IdeaSearchResult> {
        return this.api.getIdeas(1, SortType.Date, ["back-end", "front-end"], ["JavaScript", "Java"])
    }
}