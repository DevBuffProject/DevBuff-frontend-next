import Authorization from "./authorization/Authorization";
import UserMenu from "./user_menu/UserMenu";
import LoggedUser from "./authorization/LoggedUser";
import {injector} from "../../../../config/DependencyInjection.ts";
import AuthorizationService from "../../../../services/authorization/AuthorizationService";
import {useEffect, useState} from "react";
import {shallowEqual, useSelector} from "react-redux";


export default function SideBar() {

    const service = injector.get(AuthorizationService)

    const [test, setTest] = useState(1)

    const s = ()=>{
        setTest(Math.random())
    }

    const {lastUpdate, light} = service.IsAuth()()

    return (
        <aside className={'mt-10 flex flex-col gap-4 w-1/5'}>
            <div onClick={s}>Kek</div>
            {test}
            <br/>
            {lastUpdate}

            {
                !light
                    ? <Authorization/>
                    : <LoggedUser/>
            }
            <UserMenu/>
        </aside>
    )
}