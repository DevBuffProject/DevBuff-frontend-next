import Image from "next/image";
import ProfileResult from "../../../services/profile/objects/ProfileResult";
import {injector} from "../../../config/DependencyInjection";
import ProfileService from "../../../services/profile/ProfileService";
import UserForm from "./UserForm";


export default function ProfileForm (params : ProfileResult) {
    const profileService = injector.get(ProfileService)
    const user = params.profile
    return(
        <div className={'flex  2xl:flex-row  flex-wrap items-center sm:justify-evenly md:justify-start 2xl:gap-5 rounded w-full md:w-1/3 p-2 2xl:p-5 xl:p-3 lg:p-2 bg-white mt-2  '}>
            <div className={'rounded-full xl:rounded overflow-hidden w-12 h-12 2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-14 lg:h-14'}>
                <Image src={`${profileService.getAvatar(user?.id)}`} width={100} height={100} unoptimized />
            </div>
            <div className={'flex flex-col gap-1'}>
                <div className={'flex  justify-between items-center gap-2 font-montserratRegular text-sm 2xl:text-xl xl:text-base lg:text-sm'}>
                    <div>
                        <span>{user?.firstName}</span>
                        <span>{ !user?.lastName ? ' Doe' : user.lastName }</span>
                    </div>
                    <UserForm />
                </div>
                <div className={'flex font-montserratLight opacity-60 text-xs 2xl:text-sm xl:text-base lg:text-xs'}>
                    <p>{!user?.bio ? 'We are hope u are place something there' : user.bio}</p>
                </div>
            </div>
        </div>
    )
}