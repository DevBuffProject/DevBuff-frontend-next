import Link from "next/link";
import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";
import {connect} from "react-redux";
import {useTranslation} from "next-i18next";
import {FaFontAwesome, FaUser, FaUserCircle, FaUserCog} from "react-icons/fa";
import SideMenu from "./side_menu/SideMenu";
import SideSelfIdeas from "./side_ideas/SideSelfIdeas";
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
        <nav className={'relative w-64 h-screen flex flex-col p-3 gap-5 bg-gray-100 border-gray-200 border-r'}>
            <div className={'flex justify-center p-2 border-b'}>
                <Link href={'/'}>
                    <a className={''}>
                        {
                            isAuthorized
                            ? <div className={'flex justify-center items-center gap-1'}><Image src={'/icons/devbuff_lamp.svg'} width={30} height={30} /> <span className={'font-montserratBold text-x4l opacity-80'}>DevBuff</span></div>
                            : <span className={'font-montserratBold text-3xl'}>DevBuff</span>
                        }
                    </a>
                </Link>
            </div>
            <SideMenu />
            {
                isAuthorized ? <SideSelfIdeas />
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