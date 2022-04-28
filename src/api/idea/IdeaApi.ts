import HttpClient from "../http/HttpClient";
import SelfIdea from "./objects/SelfIdea";
import IdeaSearchResult from "./objects/IdeaSearchResult";
import Idea from "./objects/Idea";
import IdeaChanges from "./objects/IdeaChanges";
import {OwnerIdea} from "./objects/OwnerIdea";

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
        return response.data;
    }

    /**
     * Get idea of self user
     * @param ownerUUID owner idea
     */
    public async getOwnerIdeas(ownerUUID: string): Promise<Array<OwnerIdea>> {
        const response = await this.httpClient.get(`${IdeaApi.BASE_PATH}/user/${ownerUUID}`);
        return response.data;
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


    /**
     * Get idea by id
     * @param ideaId id of idea (UUID)
     */
    public async getIdea(ideaId: string): Promise<Idea> {
        const response = await this.httpClient.get<Idea>(`${IdeaApi.BASE_PATH}/${ideaId}`)
        return response.data
    }

    /**
     * Update idea data
     * @param ideaId id of idea (UUID)
     * @param data data for changing
     */
    public async updateIdea(ideaId: string, data: IdeaChanges): Promise<Idea> {
        const response = await this.httpClient.put<Idea>(`${IdeaApi.BASE_PATH}/${ideaId}`, data)
        return response.data
    }

    /**
     * Join into idea
     * @param ideaId target idea id (UUID)
     * @param specializationId target specialization id
     */
    public async joinToIdea(ideaId: string, specializationId: string): Promise<void> {
        const response = await this.httpClient.put<void>(`${IdeaApi.BASE_PATH}/join/${ideaId}/${specializationId}`)
        return response.data
    }

    /**
     * Approve user into team
     * @param ideaId target idea id
     * @param specializationId specialist id
     * @param userId user id
     */
    public async approveUser(ideaId: string, specializationId: string, userId: string): Promise<void> {
        const response = await this.httpClient.put<void>(`${IdeaApi.BASE_PATH}/approve/${ideaId}/${specializationId}/${userId}`)
        return response.data
    }

    /**
     * Disapprove user from idea
     * @param ideaId target idea
     * @param positionId target position
     * @param userId user for disapprove
     */
    public async disapproveUser(ideaId: string, positionId: string, userId: string): Promise<void> {
        const response = await this.httpClient.delete<void>(`${IdeaApi.BASE_PATH}/${ideaId}/positions/${positionId}/disapprove/${userId}`)
        return response.data
    }

    /**
     * Delete idea
     * @param ideaId id of idea (UUID)
     */
    public async deleteIdea(ideaId: string): Promise<void> {
        const response = await this.httpClient.delete<void>(`${IdeaApi.BASE_PATH}/${ideaId}`)
        return response.data
    }


}