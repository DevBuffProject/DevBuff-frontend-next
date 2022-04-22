import UserMenu from "./user_menu/UserMenu";
import {connect} from "react-redux";

export function SideBar() {
    return (
        <aside className={'flex sticky top-0 h-screen gap-4 '}>
            <UserMenu/>
        </aside>
    )
}

export default connect((state) => state, null)(SideBar)