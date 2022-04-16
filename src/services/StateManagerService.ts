import {Dispatch, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {Unsubscribe} from "redux";


export default class StateManagerService {

    private static _dispatch: Dispatch<any> | undefined = undefined
    private static _subscribe: (listener: () => void) => Unsubscribe;

    constructor() {
    }


    public attachDispatch(dispatch: Dispatch<any>) {
        StateManagerService._dispatch = dispatch
    }

    public dispatch(action: PayloadAction<any>) {
        if (StateManagerService._dispatch === undefined) {
            console.warn("Missing action", action.type)
            return
        }
        StateManagerService._dispatch(action)
    }

    public attachSubscribe(subscribe: (listener: () => void) => Unsubscribe) {
        StateManagerService._subscribe = subscribe;
    }

    public subscribe(subscribe: (() => void)): Unsubscribe {
        return StateManagerService._subscribe(subscribe)
    }

    static attachDispatch(dispatch: Dispatch<any>) {
        StateManagerService._dispatch = dispatch
    }
}


export const stateManagerServiceMiddleware: Middleware<{}, // Most middleware do not modify the dispatch return value
    RootState<any, any, any>> = storeApi => next => action => {
    StateManagerService.attachDispatch(storeApi.dispatch)
    return next(action)
}