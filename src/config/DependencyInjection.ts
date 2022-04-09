import {DependencyInjector, makeInjector} from "@mindspace-io/react";
import AuthorizationData from '../data/authorization/AuthorizationData'
import AuthorizationService from '../services/authorization/AuthorizationService'

export const injector: DependencyInjector = makeInjector([
    {provide: AuthorizationData, useClass: AuthorizationData},
    {provide: AuthorizationService, useClass: AuthorizationService, deps: [AuthorizationData]}
])