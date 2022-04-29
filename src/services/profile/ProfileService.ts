import ProfileApi from "../../api/profile/ProfileApi";
import Profile from "../../api/profile/objects/Profile";
import ProfileList from "../../api/profile/objects/ProfileList";
import StateManagerService from "../StateManagerService";
import {updateProfileState} from "../../redux/slices/ProfileSlice";
import FileApi from "../../api/file/FileApi";
import RemoteResource, {RemoteResourceBuilder} from "../utility/RemoteResource";


export default class ProfileService {

    private readonly api: ProfileApi
    private readonly fileApi: FileApi
    private readonly state: StateManagerService

    constructor(api: ProfileApi, fileApi: FileApi, state: StateManagerService) {
        this.api = api
        this.fileApi = fileApi
        this.state = state

    }

    public getAvatar(uuid: string | undefined): string {
        return this.fileApi.getUserAvatar(uuid)
    }

    public loadProfile() {
        this.api.getProfile().then((profile) => {
            this.state.dispatch(updateProfileState(profile))
        })
    }

    public updateProfile(profile: Profile): Promise<Profile> {
        return this.api.updateProfile(profile)
    }

    public resendEmail(): Promise<void> {
        return this.api.resendEmail()
    }

    /**
     * Get user profile by ID
     * @param uuid ID of user
     */
    public async getProfileById(uuid: string): Promise<RemoteResource<Profile>> {
        const builder = new RemoteResourceBuilder<Profile>();
        return await builder.build(this.api.getUserById(uuid))
    }


    public getListUserById(args: Array<string>): Promise<ProfileList> {
        return this.api.getListUserById(args)
    }

}