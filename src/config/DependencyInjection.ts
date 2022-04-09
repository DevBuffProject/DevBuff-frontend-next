import {DependencyInjector, makeInjector} from "@mindspace-io/react";
import AuthorizationData from '../data/authorization/AuthorizationData'
import AuthorizationService from '../services/authorization/AuthorizationService'
import HttpClient, {TokenStorage} from "../data/http/HttpClient";


export class BASE_URL {

}

export const injector: DependencyInjector = makeInjector([
    /**
     * Environment variable
     */
    {provide: BASE_URL, useValue: process.env["API"]},

    /**
     * Components
     */
    {provide: TokenStorage, useClass: TokenStorage},
    {provide: HttpClient, useClass: HttpClient, deps: [TokenStorage, BASE_URL]},
    {provide: AuthorizationData, useClass: AuthorizationData, deps: [HttpClient]},
    {provide: AuthorizationService, useClass: AuthorizationService, deps: [AuthorizationData, TokenStorage]}
])