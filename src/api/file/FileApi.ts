import HttpClient from "../http/HttpClient";


export default class FileApi {

    private static readonly BASE_PATH: string = "/files"
    private readonly httpClient: HttpClient

    constructor(httpClient : HttpClient ) {
        this.httpClient = httpClient
    }

     public getUserAvatar (uuid: string | undefined ): string {
        return `${this.httpClient.getBaseUrl()}${FileApi.BASE_PATH}/avatar/${uuid}`
    }

    public getIdeaLogo (ideaId: string): string {
        return `${this.httpClient.getBaseUrl()}${FileApi.BASE_PATH}/idea/${ideaId}/logo`
    }

    public getUserFileName (userId: string, fileName: string): string {
        return `${this.httpClient.getBaseUrl()}${FileApi.BASE_PATH}/image/${userId}/${fileName}`
    }

    // async uploadAvatar (image : string) : Promise<any> {
    //     return await this.httpClient.post(`${FileServiceApi.BASE_PATH}/image`,image)
    // }
    //
    // async updateAvatar (image : string) : Promise<any> {
    //     return await this.httpClient.put(`${FileServiceApi.BASE_PATH}/avatar`,image)
    // }

}