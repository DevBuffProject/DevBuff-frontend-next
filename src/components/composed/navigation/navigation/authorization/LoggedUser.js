import Image from "next/image";
import {BASE_URL, injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import Link from 'next/link'
import {connect} from "react-redux";
import UserForm from "../../../users/UserForm";



export function LoggedUser({profile}) {

    const profileService = injector.get(ProfileService)
    profileService.loadProfile()

    return (
        <div>
            {
                !profile
                    ? null
                    : <>
                        <Link href={`/users/${profile.id}`}>
                            <a className={'w-full absolute left-0 group md:bottom-2 bottom-40 pb-2 pl-2 pt-2 pr-3 flex items-center md:justify-between justify-center gap-12 cursor-pointer border-t-gray-300 border-t'}>
                                <div className={'flex gap-4'}>
                                    <Image src={`${profileService.getAvatar(profile.id)}`} width={32} height={32} unoptimized />
                                    <div className={'flex flex-col md:flex hidden'}>
                                        <span className={'text-xxs font-montserratBold'}>{profile.firstName || 'Bi-bu-bip'}</span>
                                        <span className={'text-xxs font-montserratLight'}>@{profile.userName}</span>
                                    </div>
                                </div>
                                <div className={' rotate-90 opacity-0 md:block hidden  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                    <Image src={'/images/arrow-up.gif'} width={20} height={20} unoptimized/>
                                </div>
                            </a>
                        </Link>
                    </>
            }
        </div>
    )
}
export default connect((state) => state)(LoggedUser)