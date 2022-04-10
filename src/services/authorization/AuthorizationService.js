import {forbid, authorize} from '../../redux/slices/AuthSlice'


export default class AuthorizationService {
    /**
     * @param {AuthorizationApi} api
     * @param {StateManagerService} state
     * @param {TokenStorage} tokenStorage
     */
    constructor(api, state, tokenStorage) {
        this.api = api
        this.state = state

        //TODO добавить инициализацию пользователя

        this.tokenStorage = tokenStorage;
        const that = this;

        tokenStorage.subscribe({
            next(tokenState) {
                if (tokenState === "INITIALIZED") {
                    that.checkUser()
                } else {
                    that.state.dispatch(forbid())
                }
            }
        })

        this.checkUser()
    }

    authorizeViaOAuth2({code, grant_type}) {
        return this.api.oAuth(code, grant_type.toLowerCase())
            .then(result => {
                this.tokenStorage.updateTokens(result.access_token, result.refresh_token)
                return result
            })
    }

    authorizeViaGitLab() {
        console.log('here')
        //TODO Api??
        location.assign(`https://${process.env.API}/oAuth/external/init/gitlab/client/${process.env.CLIENT_TYPE}`)
    }

    authorizeViaGitHab() {
        location.assign(`https:/${process.env.API}/oAuth/external/init/github/client/${process.env.CLIENT_TYPE}`)
    }

    logOut() {
        this.tokenStorage.destroy()
    }


    checkUser() {
        this.api.checkUser(
            this.tokenStorage.getAccessToken()
        ).then((data) => {
            this.state.dispatch(authorize())
        })
            .catch((e) =>
                this.state.dispatch(forbid())
            )
    }
}