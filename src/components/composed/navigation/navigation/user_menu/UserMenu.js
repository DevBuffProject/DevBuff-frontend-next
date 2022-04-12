import Link from "next/link";
import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";
import {connect} from "react-redux";
import {useTranslation} from "next-i18next";
import {FaFontAwesome, FaUser, FaUserCircle, FaUserCog} from "react-icons/fa";


export function UserMenu({auth}) {
    const service = injector.get(AuthorizationService)

    const isAuthorized = auth.isAuthorized

    const handleExit = () => {
        service.logOut()
    }

    const {t} = useTranslation('SideBar');

    const roles = auth.roles

    return (
        <nav className={'relative w-64 h-screen flex flex-col p-3  shadow-lg gap-5 bg-white'}>
            <div className={'flex justify-between p-2 border-b'}>
                <Link href={'/'}><a><Image src={'/images/logo-dark.svg'} width={200} height={60} /></a></Link>
                {/*<div className={'flex gap-3 '}>*/}
                {/*    <div className={'rounded-lg overflow-hidden bg-blue-400 w-fit flex justify-center items-center p-1'}>*/}
                {/*        <Image src={'/images/share.svg'} width={25} height={25} />*/}
                {/*    </div>*/}
                {/*    <div className={'flex flex-col'}>*/}
                {/*        <span className={'text-xs'}>ProjectName</span>*/}
                {/*        <span className={'text-xs opacity-60 font-serif'}>FounderName</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'flex flex-col items-center justify-center'}>*/}
                {/*    <button>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                {/*             className="bi bi-chevron-up" viewBox="0 0 16 16">*/}
                {/*            <path fillRule="evenodd"*/}
                {/*                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*    <button>*/}
                {/*        <svg className={'rotate-180'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                {/*             viewBox="0 0 16 16">*/}
                {/*            <path fillRule="evenodd"*/}
                {/*                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>*/}
                {/*        </svg>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            <ul className={'p-0 mt-5 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
                <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group  '}>
                    <Link href={'/explore/1'}>
                        <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <button className={'w-10 p-0 m-0 opacity-60'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                     className="bi bi-view-list" viewBox="0 0 16 16">
                                    <path
                                        d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                                </svg>
                            </button>
                            <div className={'w-30'}>
                                <span className={'text-sm opacity-60 font-montserratRegular'}>Обзор Идей</span>
                            </div>
                            <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                <Image src={'/images/view.gif'} width={32} height={32} />
                            </div>
                        </a>
                    </Link>
                </li>
                <li className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                    <Link href={'/'}>
                        <a className={'w-full relative p-0 flex items-center justify-start cursor-pointer gap-3 group '}>
                            <button className={'w-10 p-0 m-0 opacity-60'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                     className="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </button>
                            <div className={'w-30'}>
                                <span className={'text-sm opacity-60 font-montserratRegular'}>Дашборд</span>
                            </div>
                            <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                <Image src={'/images/account.gif'} width={32} height={32} />
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
                                <span className={'text-sm opacity-60 font-montserratRegular'}>Настройки</span>
                            </div>
                            <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                <Image src={'/images/settings.gif'} width={32} height={32} />
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
            <span className={'text-xxs opacity-50 font-montserratBold'}>Идеи</span>
            <ul className={'p-0 mt-1 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
                <li className={'flex gap-2'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                        <Image src={'/images/285.gif'} width={22} height={22} />
                    </div>
                    <span className={'text-sm opacity-60 font-montserratRegular'}>Имя идеи</span>
                </li>
                <li className={'flex gap-2'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                        <Image src={'/images/285.gif'} width={22} height={22} />
                    </div>
                    <span className={'text-sm opacity-60 font-montserratRegular'}>Имя идеи</span>
                </li>
                <li className={'flex gap-2'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                        <Image src={'/images/285.gif'} width={22} height={22} />
                    </div>
                    <span className={'text-sm opacity-60 font-montserratRegular'}>Имя идеи</span>
                </li>
                <li className={'flex items-center pb-2 pt-2 gap-2 group cursor-pointer'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                    </div>
                    <span className={'text-sm opacity-60 font-montserratRegular'}>Рассказать идею</span>
                    <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                        <Image src={'/images/card-outline.gif'} width={32} height={32} />
                    </div>
                </li>
            </ul>
            <div className={'absolute group bottom-2 pb-2 flex items-center gap-12 cursor-pointer'}>
                <div className={'flex gap-4'}>
                    <Image src={'/images/person.svg'} width={32} height={32} />
                    <div className={'flex flex-col'}>
                        <span className={'text-xxs font-montserratBold'}>Name Second Name</span>
                        <span className={'text-xxs font-montserratLight'}>@Username</span>
                    </div>
                </div>
                <div className={' rotate-90 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                    <Image src={'/images/arrow-up.gif'} width={20} height={20} />
                </div>
            </div>

            {/*Roles: {roles.join(', ')}*/}
            {/*<div*/}
            {/*    className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>*/}
            {/*    <Link href={'/explore/1'}>*/}
            {/*        <a className={'flex items-center gap-3'}>*/}
            {/*            <div className={'flex items-center bg-blue-200 p-1.5 rounded-md opacity-80'}>*/}
            {/*                <Image*/}
            {/*                    src={'/images/idea.svg'}*/}
            {/*                    height={30}*/}
            {/*                    width={30}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <span className={'text-lg font-sans'}>{ t('nav.idea-view') }</span>*/}
            {/*        </a>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*{*/}
            {/*    isAuthorized ? <>*/}
            {/*        <div*/}
            {/*            className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>*/}
            {/*            <Link href={'/explore/1'}>*/}
            {/*                <a className={'flex items-center gap-3'}>*/}
            {/*                    <div className={'flex items-center bg-green-200 p-1.5 rounded-md opacity-80'}>*/}
            {/*                        <Image*/}
            {/*                            src={'/images/user.svg'}*/}
            {/*                            height={30}*/}
            {/*                            width={30}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <span className={'text-lg font-sans'}>{ t('nav.dashboard') }</span>*/}
            {/*                </a>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className={'w-full flex items-center opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>*/}
            {/*            <Link href={'/explore/1'}>*/}
            {/*                <a className={'flex items-center gap-3'}>*/}
            {/*                    <div className={'flex items-center bg-pink-200 p-1.5 rounded-md opacity-80'}>*/}
            {/*                        <Image*/}
            {/*                            src={'/images/settings.svg'}*/}
            {/*                            height={30}*/}
            {/*                            width={30}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <span className={'text-lg font-sans'}>{ t('nav.settings') }</span>*/}
            {/*                </a>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className={'w-full flex flex-col items-center  opacity-60 hover:opacity-100 transition ease-in-out duration-500'}>*/}
            {/*            <hr className={'w-full mb-3'}/>*/}
            {/*            <button onClick={handleExit} className={'flex items-center gap-3'}>*/}
            {/*                <span*/}
            {/*                    className={'text-lg font-sans  text-red-300 hover:text-red-600 duration-500 transition ease-in-out'}>{ t('nav.exit') }</span>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </> : null*/}
            {/*}*/}
        </nav>
    )
}


export default connect((state) => state, null)(UserMenu)