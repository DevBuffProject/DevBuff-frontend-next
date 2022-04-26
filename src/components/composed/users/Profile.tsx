import Image from "next/image";
import ProfileResult from "../../../services/profile/objects/ProfileResult";
import {injector} from "../../../config/DependencyInjection";
import ProfileService from "../../../services/profile/ProfileService";
import UserForm from "./UserForm";


export default function ProfileForm (params : ProfileResult) {
    const profileService = injector.get(ProfileService)
    const user = params.profile
    return(
        <div className={'flex 2xl:flex-row xl:flex-col flex-wrap items-center gap-5 rounded w-1/3 p-5 bg-white mt-2  '}>
            <div className={'rounded-full xl:rounded overflow-hidden'}>
                <Image src={`${profileService.getAvatar(user?.id)}`} width={100} height={100} unoptimized />
            </div>
            <div className={'flex flex-col gap-1'}>
                <div className={'flex justify-between items-center gap-2 font-montserratRegular text-xl xl:text-base'}>
                    <div>
                        <span>{user?.firstName}</span>
                        <span>{ !user?.lastName ? ' Doe' : user.lastName }</span>
                    </div>
                    <UserForm />
                </div>
                <div className={'flex font-montserratLight opacity-60'}>
                    <p>{!user?.bio ? 'We are hope u are place something there' : user.bio}</p>
                </div>
            </div>
        </div>
    )
}