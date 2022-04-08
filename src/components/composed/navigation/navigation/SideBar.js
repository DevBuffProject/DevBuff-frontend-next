import Authorization from "./authorization/Authorization";
import UserMenu from "./user_menu/UserMenu";
import LoggedUser from "./authorization/LoggedUser";


export default function SideBar({user,token}) {
    return(
        <aside className={'mt-10 flex flex-col gap-4 w-1/5'}>
            {
                !token
                ? <Authorization />
                : <LoggedUser user={user} />
            }
            <UserMenu />
        </aside>
    )
}