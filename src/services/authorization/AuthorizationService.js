import store from "../../redux/store";
import {forbid, authorize, isAuthorized} from '../../redux/auth/AuthSlice'

export default class AuthorizationService {
    /**
     * @param {AuthorizationData} api
     */
    constructor(api) {
        console.log('test')
        this.api = api
        setInterval(() => {
            store.dispatch(Math.random() < 0.5 ? forbid() : authorize())
        }, 2000)
    }

    ResolveUser({code, grant_type}) {
        return this.api.GetData({code, grant_type})
    }

    SetUser() {
        return this.api.SetData()
    }

    GetAuthorizationState() {
        return isAuthorized
    }
}