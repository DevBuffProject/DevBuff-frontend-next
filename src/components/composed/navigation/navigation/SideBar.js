import Authorization from "./authorization/Authorization";
import UserMenu from "./user_menu/UserMenu";
import LoggedUser from "./authorization/LoggedUser";
import {injector} from "../../../../config/DependencyInjection.ts";
import AuthorizationService from "../../../../services/authorization/AuthorizationService";
import {useAppSelector} from "../../../../redux/hooks";
import {useEffect, useState} from "react";

export default function SideBar({data}) {
    const service = injector.get(AuthorizationService)
    const isAuthorizedSelector = useAppSelector(service.GetAuthorizationState())

    return (
        <aside className={'mt-10 flex flex-col gap-4 w-1/5'}>
            {
                isAuthorizedSelector ? <LoggedUser/> :  <Authorization/>
            }
            <UserMenu/>
        </aside>
    )
}
