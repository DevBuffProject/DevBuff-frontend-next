import {authorize, forbid} from '../../redux/slices/AuthSlice'
import AuthorizationApi, {TypeProvider} from "../../data/authorization/AuthorizationApi";
import StateManagerService from "../StateManagerService";
import {TokenState, TokenStorage} from "../../data/http/HttpClient";
import User from "../../data/authorization/objects/User";


export default class AuthorizationService {

    private readonly api: AuthorizationApi;

    private readonly stateManager: StateManagerService;

    private readonly tokenStorage: TokenStorage;

    constructor(api: AuthorizationApi, stateManager: StateManagerService, tokenStorage: TokenStorage) {
        this.api = api
        this.stateManager = stateManager
        this.tokenStorage = tokenStorage;
        const that = this;

        tokenStorage.subscribe({
            next(tokenState: TokenState) {
                if (tokenState === TokenState.Initialized) {
                    that.checkUser()
                } else {
                    that.stateManager.dispatch(forbid())
                }
            }
        })

        this.checkUser()
    }

    authorizeViaOAuth2(code: string, typeProvider: string) {
        return this.api.oAuth(code, typeProvider as TypeProvider)
            .then(result => {
                this.tokenStorage.updateTokens(result.access_token, result.refresh_token)
                return result
            })
    }

    authorizeViaGitLab() {
        console.log('here')
        location.assign(this.api.buildAuthorizationLink(TypeProvider.GitLab))
    }

    authorizeViaGitHab() {
        location.assign(this.api.buildAuthorizationLink(TypeProvider.GitHub))
    }

    logOut() {
        this.tokenStorage.destroy()
    }


    checkUser() {
        let accessToken = this.tokenStorage.getAccessToken();

        if (accessToken === null) {
            accessToken = ""
        }

        this.api.checkUser(accessToken)
            .then((data: User) => {
                this.stateManager.dispatch(authorize(data))
            })
            .catch(() => {
                    this.stateManager.dispatch(forbid())
                }
            )
    }
}