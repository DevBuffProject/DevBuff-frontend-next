import AuthorizationData from "../../data/authorization/AuthorizationData";


export default class AuthorizationService {
    constructor() {

    }
    ResolveUser({code,grant_type}) {
        const user = new AuthorizationData()
        return user.GetData({code,grant_type})
    }
    SetUser() {
        const user = new AuthorizationData()
        return user.SetData()
    }
}