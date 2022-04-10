import Authorization from "./authorization/Authorization";
import UserMenu from "./user_menu/UserMenu";
import LoggedUser from "./authorization/LoggedUser";
import {connect} from "react-redux";
import Header from "../../header/Header";

export function SideBar({data, auth}) {
    const isAuthorized = auth.isAuthorized
    return (
        <aside className={'mt-10 flex flex-col gap-4 w-1/5'}>
            {
                isAuthorized === true ? <LoggedUser/> : ( isAuthorized === false ? <Authorization/>: <div/>)
            }
            <UserMenu/>
        </aside>
    )
}

export default connect((state) => state, null)(SideBar)