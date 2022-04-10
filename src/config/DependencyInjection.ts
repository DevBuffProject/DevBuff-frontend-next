import {DependencyInjector, makeInjector} from "@mindspace-io/react";
import AuthorizationData from '../data/authorization/AuthorizationData'
import AuthorizationService from '../services/authorization/AuthorizationService'
import HttpClient, {TokenStorage} from "../data/http/HttpClient";
import ProfileService from "../services/profile/ProfileService";
import ProfileApi from "../data/profile/ProfileApi";


export class BASE_URL {

}

export const injector: DependencyInjector = makeInjector([
    /**
     * Environment variable
     */
    {provide: BASE_URL, useValue: `https://${process.env["API"]}`},

    /**
     * Components
     */
    {provide: TokenStorage, useClass: TokenStorage},
    {provide: HttpClient, useClass: HttpClient, deps: [TokenStorage, BASE_URL]},
    {provide: AuthorizationData, useClass: AuthorizationData, deps: [HttpClient]},
    {provide: AuthorizationService, useClass: AuthorizationService, deps: [AuthorizationData, TokenStorage]},
    {provide: ProfileApi, useClass: ProfileApi, deps: [HttpClient]},
    {provide: ProfileService, useClass: ProfileService, deps : [ProfileApi]}
])