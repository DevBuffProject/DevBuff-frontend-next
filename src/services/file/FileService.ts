import FileServiceApi from "../../api/file_service/FileServiceApi";


export default class FileService {
    private readonly api: FileServiceApi;

    constructor(api: FileServiceApi) {
        this.api = api;
    }

    public getAvatar(uuid : string): Promise<any> {
        return this.api.getUserAvatar(uuid)
    }
}