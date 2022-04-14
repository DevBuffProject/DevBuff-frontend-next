import {DependencyInjector, makeInjector} from "@mindspace-io/react";
import AuthorizationApi from '../api/authorization/AuthorizationApi'
import AuthorizationService from '../services/authorization/AuthorizationService'
import HttpClient, {TokenStorage} from "../api/http/HttpClient";
import ProfileService from "../services/profile/ProfileService";
import ProfileApi from "../api/profile/ProfileApi";
import StateManagerService from "../services/StateManagerService";
import NotificationApi from "../api/notification/NotificationApi";
import SkillApi from "../api/skill/SkillApi";
import SkillManagerApi from "../api/skill/SkillManagerApi";
import IdeaApi from "../api/idea/IdeaApi";
import IdeaService from "../services/idea/IdeaService";
import FileApi from "../api/file/FileApi";


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

    /**
     * APIs
     */
    {provide: AuthorizationApi, useClass: AuthorizationApi, deps: [HttpClient, CLIENT_TYPE]},
    {provide: NotificationApi, useClass: NotificationApi, deps: [HttpClient]},
    {provide: SkillApi, useClass: SkillApi, deps: [HttpClient]},
    {provide: SkillManagerApi, useClass: SkillManagerApi, deps: [HttpClient]},
    {provide: ProfileApi, useClass: ProfileApi, deps: [HttpClient]},
    {provide: IdeaApi, useClass: IdeaApi, deps: [HttpClient]},
    {provide: FileApi, useClass: FileApi, deps: [HttpClient]},

    /**
     * Services
     */
    {
        provide: AuthorizationService,
        useClass: AuthorizationService,
        deps: [AuthorizationApi, StateManagerService, TokenStorage]
    },
    {provide: ProfileService, useClass: ProfileService, deps: [ProfileApi,FileApi, StateManagerService]},
    {provide: IdeaService, useClass: IdeaService, deps: [IdeaApi,FileApi]},
])