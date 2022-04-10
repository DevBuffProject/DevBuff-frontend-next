import ProfileApi from "../../api/profile/ProfileApi";
import Profile from "../../api/profile/objects/Profile";
import ProfileList from "../../api/profile/objects/ProfileList";
import StateManagerService from "../StateManagerService";
import {updateProfileState} from "../../redux/slices/ProfileSlice";


export default class ProfileService {

    private readonly api: ProfileApi
    private readonly state: StateManagerService

    constructor(api: ProfileApi, state: StateManagerService) {
        this.api = api
        this.state = state

    }

    public loadProfileData() {
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

    public getUserById(uuid: string): Promise<Profile> {
        return this.api.getUserById(uuid)
    }

    public getListUserById(args: Array<string>): Promise<ProfileList> {
        return this.api.getListUserById(args)
    }

}