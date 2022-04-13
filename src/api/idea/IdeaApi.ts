import HttpClient from "../http/HttpClient";
import SelfIdea from "./objects/SelfIdea";
import IdeaSearchResult from "./objects/IdeaSearchResult";

export enum SortType {
    /**
     * Order by date published
     */
    Date = "DATE",
    /**
     * Currently not supported :(
     */
    Popularity = "POPULARITY",
    /**
     * Sort by last updating of information
     */
    LastUpdate = "LAST_UPDATE"
}

export default class IdeaApi {

    private static readonly BASE_PATH: string = "/ideas"

    private readonly httpClient: HttpClient;


    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Get idea of current user
     */
    public async getSelfIdeas(): Promise<Array<SelfIdea>> {
        const response = await this.httpClient.get<Array<SelfIdea>>(`${IdeaApi.BASE_PATH}/self`)
        return response.data
    }

    /**
     * Get ideas by criteria
     * @param page page of current idea
     * @param sortBy sort criteria
     * @param specialists required specialists
     * @param languages required languages, without specialists ignoring
     */
    public async getIdeas(page: number, sortBy: SortType, specialists?: Array<string>, languages?: Array<string>): Promise<IdeaSearchResult> {

        const params = new URLSearchParams()
        params.append("page", page.toString())
        params.append("sortBy", sortBy as string)

        if (specialists !== undefined && specialists?.length > 0) {
            params.append("specialists", specialists.join(","))
            if (languages !== undefined && languages?.length > 0) {
                params.append("languages", languages.join(","))
            }
        }

        const response = await this.httpClient.get<IdeaSearchResult>(`${IdeaApi.BASE_PATH}?${params.toString()}`)
        return response.data
    }
}