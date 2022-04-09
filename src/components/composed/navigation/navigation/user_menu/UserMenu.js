import Link from "next/link";
import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";
import {useAppSelector} from "../../../../../redux/hooks";
import ProfileService from "../../../../../services/profile/ProfileService";

export default function UserMenu () {
    const service = injector.get(AuthorizationService)


    const isAuthorizedSelector = useAppSelector(service.GetAuthorizationState())

    const handleExit = () => {
        //TODO to service layer
        //  service.logout()


        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        location.reload()
    }

    return(
        <nav className={'flex flex-col  gap-5'}>
            <div className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                <Link href={'/explore/1'}>
                    <a className={'flex items-center gap-3'}>
                        <div className={'flex items-center bg-blue-200 p-1.5 rounded-md opacity-80'}>
                            <Image
                                src={'/images/idea.svg'}
                                height={30}
                                width={30}
                            />
                        </div>
                        <span className={'text-lg font-sans'}>Обзор Идей</span>
                    </a>
                </Link>
            </div>
            {
                isAuthorizedSelector ? <>
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
                                <span className={'text-lg font-sans'}>Дашборд</span>
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
                                <span className={'text-lg font-sans'}>Настройки</span>
                            </a>
                        </Link>
                    </div>
                    <div
                        className={'w-full flex flex-col items-center  opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>
                        <hr className={'w-full mb-3'}/>
                        <button onClick={handleExit} className={'flex items-center gap-3'}>
                            <span
                                className={'text-lg font-sans  text-red-300 hover:text-red-600 duration-500 transition ease-in-out'}>Выйти</span>
                        </button>
                    </div>
                </> : null
            }
        </nav>
    )
}