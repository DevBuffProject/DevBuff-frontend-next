import HttpClient from "../http/HttpClient";
import Profile from "./objects/Profile";
import ProfileList from "./objects/ProfileList";



export default class ProfileApi {


    private readonly httpClient : HttpClient

    constructor( httpClient : HttpClient ) {
        this.httpClient = httpClient
    }


    public async getProfile () : Promise<Profile> {
       const response = await this.httpClient.get<Profile>('/profile')
       return  response.data
    }

    public async resendEmail() : Promise<void> {
        await this.httpClient.post('/profile/email/resend')
    }

    public async updateProfile (profile : Profile) : Promise<Profile> {
        const  response = await  this.httpClient.patch<Profile>('/profile',profile)
        return response.data
    }

    public async getUserById (uuid : string ) : Promise<Profile> {
        const response = await this.httpClient.get<Profile>(`/profile/${uuid}`)
        return response.data
    }

    public async getListUserById (uuid : Array<string> ) : Promise<ProfileList> {
        const response = await this.httpClient.get<Profile>(`/profile/${uuid.join(',')}`)
        return response.data
    }



}