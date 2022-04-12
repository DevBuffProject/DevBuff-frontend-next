import Authorization from "./authorization/Authorization";
import UserMenu from "./user_menu/UserMenu";
import LoggedUser from "./authorization/LoggedUser";
import {connect} from "react-redux";

export function SideBar({data, auth}) {
    const isAuthorized = auth.isAuthorized
    return (
        <aside className={' flex flex-col gap-4 w-1/5'}>
            {
                // isAuthorized === true ? <LoggedUser/> : ( isAuthorized === false ? <Authorization/>: <div/>)
            }
            <UserMenu/>
        </aside>
    )
}

export default connect((state) => state, null)(SideBar)