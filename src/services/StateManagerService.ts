import {Dispatch, Middleware} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";


export default class StateManagerService{

    private static _dispatch: Dispatch<any> | undefined = undefined

    constructor() {
    }


    public attachDispatch(dispatch: Dispatch<any>){
        StateManagerService._dispatch = dispatch
    }

    public dispatch(action: any){
        if(StateManagerService._dispatch === undefined) {
            return
        }
        StateManagerService._dispatch(action)
    }

    static attachDispatch(dispatch: Dispatch<any>){
        StateManagerService._dispatch = dispatch
    }
}


export const stateManagerServiceMiddleware: Middleware<
    {}, // Most middleware do not modify the dispatch return value
    RootState<any, any, any>> = storeApi => next => action => {
    StateManagerService.attachDispatch(storeApi.dispatch)
    return next(action)
}