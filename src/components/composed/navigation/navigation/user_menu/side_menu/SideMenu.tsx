import Link from "next/link";
import Image from "next/image";
import {connect} from "react-redux";
import {useTranslation} from "next-i18next";
import {FaRegBell} from "react-icons/fa";
import {AuthState} from "../../../../../../redux/slices/AuthSlice";
import {NotificationState} from "../../../../../../redux/slices/NotificationSlice";

interface Input {
    auth: AuthState,
    notification: NotificationState
}

export const SideMenu = (input: Input) => {
    const {t} = useTranslation('SideMenu');

    const isAuthorized = input.auth.isAuthorized
    const hasUnreadNotifications = input.notification.hasUnread
    return (
        <ul className={'p-0 mt-5 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
            <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group  '}>
                <Link href={'/explore/1'}>
                    <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                        <button className={'w-10 flex p-0 m-0 opacity-60'}>
                            <Image src={'/icons/view.svg'} width={20} height={20}/>
                        </button>
                        <div className={'w-30'}>
                            <span className={'text-xs opacity-60 font-montserratBold'}>{t('idea-view')}</span>
                        </div>
                        <div
                            className={'absolute right-5 opacity-0 flex items-center  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                            <Image src={'/images/view.gif'} width={20} height={20} unoptimized/>
                        </div>
                    </a>
                </Link>
            </li>
            {
                isAuthorized ? <>
                        <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <Link href={'/'}>
                                <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                                    <button className={'w-10 flex p-0 m-0 opacity-60'}>
                                        <Image src={'/icons/person.svg'} width={20} height={20}/>
                                    </button>
                                    <div className={'w-30'}>
                                        <span className={'text-xs opacity-60 font-montserratBold'}>Дашборд</span>
                                    </div>
                                    <div
                                        className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                        <Image src={'/images/account.gif'} width={20} height={20} unoptimized/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <Link href={'/notifications'}>
                                <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                                    <button className={'w-10 flex p-0 m-0 opacity-60'}>
                                        {
                                            hasUnreadNotifications ?
                                                <span
                                                    className={'absolute inline-block top-0 left-3 scale-x-20 scale-y-20 p-1 text-md bg-red-600 rounded-full z-10'}/>
                                                : null
                                        }
                                        <FaRegBell/>
                                    </button>
                                    <div className={'w-30'}>
                                        <span className={'text-xs opacity-60 font-montserratBold'}>Уведомления</span>
                                    </div>
                                </a>
                            </Link>
                        </li>

                        <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <Link href={'/'}>
                                <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group'}>
                                    <button className={'w-10 flex p-0 m-0 opacity-60'}>
                                        <Image src={'/icons/sliders.svg'} width={20} height={20}/>
                                    </button>
                                    <div className={'w-30'}>
                                        <span className={'text-xs opacity-60 font-montserratBold'}>Настройки</span>
                                    </div>
                                    <div
                                        className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                        <Image src={'/images/settings.gif'} width={20} height={20} unoptimized/>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </>
                    : null
            }
        </ul>
    )
}

export default connect((state) => state, null)(SideMenu)