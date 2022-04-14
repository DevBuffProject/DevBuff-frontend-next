import Link from "next/link";
import Image from "next/image";
import {connect} from "react-redux";
import {injector} from "../../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../../services/authorization/AuthorizationService";
import {useTranslation} from "next-i18next";


export function SideMenu({auth}) {
    const service = injector.get(AuthorizationService)

    const {t} = useTranslation('SideMenu');

    const isAuthorized = auth.isAuthorized
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
                            <Image src={'/images/view.gif'} width={20} height={20} unoptimized={true}/>
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
                                        <Image src={'/images/account.gif'} width={20} height={20}/>
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
                                        <Image src={'/images/settings.gif'} width={20} height={20}/>
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