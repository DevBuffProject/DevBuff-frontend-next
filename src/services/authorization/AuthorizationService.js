import store from "../../redux/store";
import {forbid, authorize, isAuthorized} from '../../redux/slices/AuthSlice'

export default class AuthorizationService {
    /**
     * @param {AuthorizationData} api
     */
    constructor(api) {
        this.api = api
        setInterval(() => {
            store.dispatch(Math.random() < 0.5 ? forbid() : authorize())
        }, 2000)
        //TODO добавить инициализацию пользователя
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