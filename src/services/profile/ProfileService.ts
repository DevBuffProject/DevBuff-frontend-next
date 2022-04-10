import ProfileApi from "../../api/profile/ProfileApi";
import Profile from "../../api/profile/objects/Profile";
import ProfileList from "../../api/profile/objects/ProfileList";
import StateManagerService from "../StateManagerService";
import {updateProfileState} from "../../redux/slices/ProfileSlice";
import ProfileResult from "./objects/ProfileResult";
import {AxiosError} from "axios";


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


    public async loadUserById(uuid: string): Promise<ProfileResult> {
        const result = {} as ProfileResult;
        try {
            result.profile = await this.getUserById(uuid)
            result.status = 200;
        } catch (e: AxiosError | any) {
            console.log(typeof e)
            result.status = e.response.status
        }
        return result
    }


    public getListUserById(args: Array<string>): Promise<ProfileList> {
        return this.api.getListUserById(args)
    }

}