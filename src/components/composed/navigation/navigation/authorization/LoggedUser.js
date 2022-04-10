import Image from "next/image";
import {useEffect, useState} from "react";
import {injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";

export default function LoggedUser() {

    const [user, setUser] = useState(null);
    //TODO service profile


    useEffect(()=>{
        const profile = injector.get(ProfileService)
        profile.getProfileData()
            .then( profile =>{
                setUser(profile)
            })
    },[true])
    return(
        <div className={'flex gap-2 items-center opacity-70 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer'}>
            {
                !user
                ? null
                : <>
                    <div className={'rounded-xl overflow-hidden item-center'}>
                        <Image src={`https://api-staging.devbuff.com/photo/profile/${user.id}`} height={30} width={30} />
                    </div>
                    <span className={'text-xs text-black opacity-60'}>{user.firstName || 'Bi-bu-bip'}</span>
                    <span className={'text-xs text-gray-300'}>@{user.userName}</span>
                </>
            }
        </div>
    )
}