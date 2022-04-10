import {DependencyInjector, makeInjector} from "@mindspace-io/react";
import AuthorizationApi from '../api/authorization/AuthorizationApi'
import AuthorizationService from '../services/authorization/AuthorizationService'
import HttpClient, {TokenStorage} from "../api/http/HttpClient";
import ProfileService from "../services/profile/ProfileService";
import ProfileApi from "../api/profile/ProfileApi";
import StateManagerService from "../services/StateManagerService";


export class BASE_URL {

}

export class CLIENT_TYPE {

}
export const injector: DependencyInjector = makeInjector([
    /**
     * Environment variable
     */
    {provide: BASE_URL, useValue: `https://${process.env["API"]}`},
    {provide: CLIENT_TYPE, useValue: `${process.env["CLIENT_TYPE"]}`},

    /**
     * Components
     */
    {provide: StateManagerService, useClass: StateManagerService},
    {provide: TokenStorage, useClass: TokenStorage},
    {provide: HttpClient, useClass: HttpClient, deps: [TokenStorage, BASE_URL]},
    {provide: AuthorizationApi, useClass: AuthorizationApi, deps: [HttpClient, CLIENT_TYPE]},
    {
        provide: AuthorizationService,
        useClass: AuthorizationService,
        deps: [AuthorizationApi, StateManagerService, TokenStorage]
    },
    {provide: ProfileApi, useClass: ProfileApi, deps: [HttpClient]},
    {provide: ProfileService, useClass: ProfileService, deps: [ProfileApi, StateManagerService]}
])