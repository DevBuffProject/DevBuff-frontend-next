import AuthorizationData from "../../data/authorization/AuthorizationData";
import {initializeStore} from "../../store";
import {shallowEqual, useSelector} from "react-redux";


export default class AuthorizationService {
    constructor(api) {
        this.api = api
        this.a = Math.random()
        console.log(api)
        const reduxStore = initializeStore()
        const {dispatch} = reduxStore

        setInterval(() => {
            dispatch({
                type: 'TICK',
                light: Math.random() < 0.5,
                lastUpdate: Date.now(),
            })
        }, 2000)
    }

    ResolveUser({code, grant_type}) {
        const user = new AuthorizationData()
        return user.GetData({code, grant_type})
    }

    SetUser() {

        const user = new AuthorizationData()
        return user.SetData()
    }

    IsAuth() {
        return () => {
            return useSelector(
                (state) => ({
                    lastUpdate: state.lastUpdate,
                    light: state.light,
                }),
                shallowEqual
            )
        }
    }
}