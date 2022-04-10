import Profile from "../../../api/profile/objects/Profile";

export default interface ProfileResult {
    status: number,
    profile: Profile | undefined
}