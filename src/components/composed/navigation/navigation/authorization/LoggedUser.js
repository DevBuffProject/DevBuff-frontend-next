import Image from "next/image";
import {BASE_URL, injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import {connect} from "react-redux";

export function LoggedUser({profile}) {

    injector.get(ProfileService).loadProfile()
    const baseUrl = injector.get(BASE_URL)
    return (
        <div>
            {
                !profile
                    ? null
                    : <>
                        <div className={'absolute group bottom-2 pb-2 flex items-center gap-12 cursor-pointer'}>
                            <div className={'flex gap-4'}>
                                <Image src={`${baseUrl}/photo/profile/${profile.id}`} width={32} height={32} />
                                <div className={'flex flex-col'}>
                                    <span className={'text-xxs font-montserratBold'}>{profile.firstName || 'Bi-bu-bip'}</span>
                                    <span className={'text-xxs font-montserratLight'}>@{profile.userName}</span>
                                </div>
                            </div>
                            <div className={' rotate-90 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                <Image src={'/images/arrow-up.gif'} width={20} height={20} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
export default connect((state) => state)(LoggedUser)