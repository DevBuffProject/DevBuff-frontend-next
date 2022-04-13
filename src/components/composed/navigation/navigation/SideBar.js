import UserMenu from "./user_menu/UserMenu";
import {connect} from "react-redux";

export function SideBar({data, auth}) {
    const isAuthorized = auth.isAuthorized
    return (
        <aside className={' flex flex-col gap-4 '}>
            {
                // isAuthorized === true ? <LoggedUser/> : ( isAuthorized === false ? <Authorization/>: <div/>)
            }
            <UserMenu/>
        </aside>
    )
}

export default connect((state) => state, null)(SideBar)