import SocialNetworks from "./SocialNetworks";
import Skill from "./Skill";


export default interface Profile {
    id : string
    userName: string
    firstName: string
    lastName: string
    email: string
    statusEmailConfirm: boolean
    birthday: any
    countryId: number
    cityId: number
    bio: string
    status: string
    socialNetworks : SocialNetworks
    skills : Array<Skill>
}