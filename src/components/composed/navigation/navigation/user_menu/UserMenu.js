import Link from "next/link";
import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";
import {connect} from "react-redux";
import {useTranslation} from "next-i18next";

export function UserMenu({auth}) {
    const service = injector.get(AuthorizationService)

    const isAuthorized = auth.isAuthorized

    const handleExit = () => {
        service.logOut()
    }

    const {t} = useTranslation('SideBar');

    const roles = auth.roles

    return (
        <nav className={'flex flex-col  gap-5'}>
            Roles: {roles.join(', ')}
            <div
                className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                <Link href={'/explore/1'}>
                    <a className={'flex items-center gap-3'}>
                        <div className={'flex items-center bg-blue-200 p-1.5 rounded-md opacity-80'}>
                            <Image
                                src={'/images/idea.svg'}
                                height={30}
                                width={30}
                            />
                        </div>
                        <span className={'text-lg font-sans'}>{ t('nav.idea-view') }</span>
                    </a>
                </Link>
            </div>
            {
                isAuthorized ? <>
                    <div
                        className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                        <Link href={'/explore/1'}>
                            <a className={'flex items-center gap-3'}>
                                <div className={'flex items-center bg-green-200 p-1.5 rounded-md opacity-80'}>
                                    <Image
                                        src={'/images/user.svg'}
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <span className={'text-lg font-sans'}>{ t('nav.dashboard') }</span>
                            </a>
                        </Link>
                    </div>
                    <div
                        className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                        <Link href={'/explore/1'}>
                            <a className={'flex items-center gap-3'}>
                                <div className={'flex items-center bg-pink-200 p-1.5 rounded-md opacity-80'}>
                                    <Image
                                        src={'/images/settings.svg'}
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <span className={'text-lg font-sans'}>{ t('nav.settings') }</span>
                            </a>
                        </Link>
                    </div>
                    <div
                        className={'w-full flex flex-col items-center  opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                        <hr className={'w-full mb-3'}/>
                        <button onClick={handleExit} className={'flex items-center gap-3'}>
                            <span
                                className={'text-lg font-sans  text-red-300 hover:text-red-600 duration-500 transition ease-in-out'}>{ t('nav.exit') }</span>
                        </button>
                    </div>
                </> : null
            }
        </nav>
    )
}


export default connect((state) => state, null)(UserMenu)