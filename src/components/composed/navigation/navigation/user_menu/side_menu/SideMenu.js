import Link from "next/link";
import Image from "next/image";
import {connect} from "react-redux";
import {UserMenu} from "../UserMenu";
import {injector} from "../../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../../services/authorization/AuthorizationService";


export  function SideMenu ({auth}) {
    const service = injector.get(AuthorizationService)

    const isAuthorized = auth.isAuthorized
    return(
        <ul className={'p-0 mt-5 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
            <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group  '}>
                <Link href={'/explore/1'}>
                    <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                        <button className={'w-10 p-0 m-0 opacity-60'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-view-list" viewBox="0 0 16 16">
                                <path
                                    d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                            </svg>
                        </button>
                        <div className={'w-30'}>
                            <span className={'text-xs opacity-60 font-montserratBold'}>Обзор Идей</span>
                        </div>
                        <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                            <Image src={'/images/view.gif'} width={20} height={20} />
                        </div>
                    </a>
                </Link>
            </li>
            {
            isAuthorized ? <>
                        <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <Link href={'/'}>
                                <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                                    <button className={'w-10 p-0 m-0 opacity-60'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-person" viewBox="0 0 16 16">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        </svg>
                                    </button>
                                    <div className={'w-30'}>
                                        <span className={'text-xs opacity-60 font-montserratBold'}>Дашборд</span>
                                    </div>
                                    <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                        <Image src={'/images/account.gif'} width={20} height={20} />
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <Link href={'/'}>
                                <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group'}>
                                    <button className={'w-10 p-0 m-0 opacity-60'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                             className="bi bi-sliders" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                                        </svg>
                                    </button>
                                    <div className={'w-30'}>
                                        <span className={'text-xs opacity-60 font-montserratBold'}>Настройки</span>
                                    </div>
                                    <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                        <Image src={'/images/settings.gif'} width={20} height={20} />
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