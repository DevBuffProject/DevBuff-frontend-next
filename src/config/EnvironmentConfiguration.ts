import {InjectionToken} from "@mindspace-io/react";

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>("Base API of DevBuff service.");

export const CLIENT_TYPE: InjectionToken<string> = new InjectionToken<string>("Client type of current application.");