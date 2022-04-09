import ProfileApi from "../../data/profile/ProfileApi";
import Profile from "../../data/profile/objects/Profile";


export default class ProfileService {

    private readonly api : ProfileApi

    constructor(api : ProfileApi) {
        this.api = api

    }

    public getProfileData (): Promise<Profile> {
       return  this.api.getProfile()
    }

    public updateProfile (profile : Profile) : Promise<Profile> {
        return this.api.updateProfile(profile)
    }

    public resendEmail () : Promise<void> {
        return  this.api.resendEmail()
    }

    public getUserById (uuid : string) : Promise<Profile> {
        return this.api.getUserById(uuid)
    }

    public getListUserById (uuid : Array<string>) : Promise<Profile> {
        return this.api.getListUserById(uuid)
    }

}