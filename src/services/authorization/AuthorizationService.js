import store from "../../redux/store";
import {forbid, authorize, isAuthorized} from '../../redux/slices/AuthSlice'
import {useObservable} from "@mindspace-io/react";

export default class AuthorizationService {
    /**
     * @param {AuthorizationData} api
     * @param {HttpClient} httpClient
     * @param {TokenObservable} tokenObservable
     */
    constructor(api, httpClient, tokenObservable) {
        this.api = api
        // setInterval(() => {
        //     store.dispatch(Math.random() < 0.5 ? forbid() : authorize())
        // }, 2000)
        //TODO добавить инициализацию пользователя

        const that = this;

        tokenObservable.subscribe({
            next(tokenState) {
                console.log(tokenState)
                if (tokenState === "INITIALIZED"){
                    that.checkUser()
                }else{
                    store.dispatch(forbid())
                }
            }
        })

        httpClient.get("/profile").then((data)=>{
            console.log(data.data)
        })

        this.checkUser()
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


    checkUser() {
        this.api.checkUser().then((data) => {
            console.log(data)
            store.dispatch(authorize())
        })
            .catch((e) =>

                store.dispatch(forbid())
            )
    }
}