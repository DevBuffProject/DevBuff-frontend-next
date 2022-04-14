import HttpClient from "../http/HttpClient";


export default class FileServiceApi {

    private static readonly BASE_PATH: string = "/files"
    private readonly httpClient : HttpClient

    constructor(httpClient : HttpClient ) {

        this.httpClient = httpClient
    }

    async getUserAvatar (uuid : string ) : Promise<any> {
        return  await this.httpClient.get(`${FileServiceApi.BASE_PATH}/avatar/${uuid}`)
    }

    async getIdeaLogo (ideaId : string) : Promise<any> {
        return await this.httpClient.get(`${FileServiceApi.BASE_PATH}/idea/${ideaId}/logo`)
    }

    async getUserFileName (userId : string, fileName : string) : Promise<any> {
        return await this.httpClient.get(`${FileServiceApi.BASE_PATH}/image/${userId}/${fileName}`)
    }

    async uploadAvatar (image : string) : Promise<any> {
        return await this.httpClient.post(`${FileServiceApi.BASE_PATH}/image`,image)
    }

    async updateAvatar (image : string) : Promise<any> {
        return await this.httpClient.put(`${FileServiceApi.BASE_PATH}/avatar`,image)
    }

}