import Link from "next/link";
import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";
import {connect} from "react-redux";
import {useTranslation} from "next-i18next";
import {FaFontAwesome, FaUser, FaUserCircle, FaUserCog} from "react-icons/fa";
import SideMenu from "./side_menu/SideMenu";
import SideIdeas from "./side_ideas/SideIdeas";
import LoggedUser from "../authorization/LoggedUser";
import Authorization from "../authorization/Authorization";


export function UserMenu({auth}) {
    const service = injector.get(AuthorizationService)

    const isAuthorized = auth.isAuthorized

    const handleExit = () => {
        service.logOut()
    }

    const {t} = useTranslation('SideBar');

    const roles = auth.roles

    return (
        <nav className={'relative w-64 h-screen flex flex-col p-3   gap-5 bg-white'}>
            <div className={'flex justify-between p-2 border-b'}>
                <Link href={'/'}><a><Image src={'/images/logo-dark.svg'} width={200} height={60} /></a></Link>
            </div>
            <SideMenu />
            {
                isAuthorized ? <SideIdeas />
                    : null
            }
            {
                isAuthorized ? <LoggedUser />
                    : <div className={'absolute bottom-10 right-1 w-full p-2  rounded'}> <Authorization /> </div>
            }
        </nav>
    )
}


export default connect((state) => state, null)(UserMenu)