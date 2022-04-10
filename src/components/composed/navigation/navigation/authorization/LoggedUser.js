import Image from "next/image";
import {BASE_URL, injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import {connect} from "react-redux";

export function LoggedUser({profile}) {

    injector.get(ProfileService).loadProfile()
    const baseUrl = injector.get(BASE_URL)
    return (
        <div
            className={'flex gap-2 items-center opacity-70 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer'}>
            {
                !profile
                    ? null
                    : <>
                        <div className={'rounded-xl overflow-hidden item-center'}>
                            <Image src={`${baseUrl}/photo/profile/${profile.id}`} height={30} width={30}/>
                        </div>
                        <span className={'text-xs text-black opacity-60'}>{profile.firstName || 'Bi-bu-bip'}</span>
                        <span className={'text-xs text-gray-300'}>@{profile.userName}</span>
                    </>
            }
        </div>
    )
}

export default connect((state) => state)(LoggedUser)