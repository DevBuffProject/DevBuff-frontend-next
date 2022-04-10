import store from "../../redux/store";
import {forbid, authorize, isAuthorized} from '../../redux/slices/AuthSlice'


export default class AuthorizationService {
    /**
     * @param {AuthorizationData} api
     * @param {TokenStorage} tokenStorage
     */
    constructor(api, tokenStorage) {
        this.api = api

        //TODO добавить инициализацию пользователя

        this.tokenStorage = tokenStorage;
        const that = this;

        tokenStorage.subscribe({
            next(tokenState) {
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

    authorizeViaGitLab () {
        console.log('here')
        location.assign(`https://${process.env.API}/oAuth/external/init/gitlab/client/${process.env.CLIENT_TYPE}`)
    }
    authorizeViaGitHab () {
        location.assign(`https://${process.env.API}/oAuth/external/init/github/client/${process.env.CLIENT_TYPE}`)
    }

    logOut() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        location.reload()
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
            this.dispatch(authorize())
        })
            .catch((e) =>

                this.dispatch(forbid())
            )
    }
}