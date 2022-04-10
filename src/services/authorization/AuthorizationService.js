import store from "../../redux/store";
import {forbid, authorize, isAuthorized} from '../../redux/slices/AuthSlice'


export default class AuthorizationService {
    /**
     * @param {AuthorizationData} api
     * @param {TokenStorage} tokenStorage
     */
    constructor(api, tokenStorage) {
        this.api = api
        // setInterval(() => {
        //     store.dispatch(Math.random() < 0.5 ? forbid() : authorize())
        // }, 2000)
        //TODO добавить инициализацию пользователя

        this.tokenStorage = tokenStorage;
        const that = this;

        tokenStorage.subscribe({
            next(tokenState) {
                console.log(tokenState)
                if (tokenState === "INITIALIZED"){
                    that.checkUser()
                }else{
                    store.dispatch(forbid())
                }
            }
        })

        this.checkUser()
    }

    authorizeViaOAuth2({code, grant_type}) {
        return this.api.GetData({code, grant_type})
            .then(result=>{
                 this.tokenStorage.updateTokens(result.access_token,result.refresh_token)
                return result
            })
    }

    SetUser() {
        return this.api.SetData()
    }

    GetAuthorizationState() {
        return isAuthorized
    }

    attachDispatch(dispatch){
        this.dispatch = dispatch
    }


    checkUser() {
        this.api.checkUser(
            this.tokenStorage.getAccessToken()
        ).then((data) => {
            console.log(data)
            this.dispatch(authorize())
        })
            .catch((e) =>

                this.dispatch(forbid())
            )
    }
}