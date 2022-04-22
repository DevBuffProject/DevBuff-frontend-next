import {GetServerSideProps} from "next";
import {injector} from "../../config/DependencyInjection";
import ProfileService from "../../services/profile/ProfileService";
import UserForm from '../../components/composed/users/UserForm'
import ProfileResult from "../../services/profile/objects/ProfileResult";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";

import Image from "next/image";
import Profile from "../../api/profile/objects/Profile";



export default function UserProfile(profileResult: ProfileResult) {
    console.log(profileResult.profile)
    const profileService = injector.get(ProfileService)
    const userID : string | undefined = profileResult.profile?.id
    const user : Profile | undefined = profileResult.profile

    // if (profileResult.profile === undefined) {
    //     switch (profileResult.status) {
    //         case 401: {
    //             return (
    //                 <div>Access Denied</div>
    //             )
    //         }
    //         case 404: {
    //             return (
    //                 <div>Not found</div>
    //             )
    //         }
    //         default: {
    //             return <div/>
    //         }
    //     }
    // }

    return (
        <div className={"w-full  bg-blue-50 p-10"}>
            <span className={'text-4xl font-montserratThin opacity-60'}>Profile</span>
            <div className={'flex gap-4'}>
                {/*{USER TEMPLATE}*/}
                <div className={'flex flex-wrap gap-5 rounded w-1/3 p-5 bg-white mt-2 '}>
                    <div className={'rounded-full overflow-hidden'}>
                        <Image src={`${profileService.getAvatar(userID)}`} width={100} height={100}  unoptimized />
                    </div>
                    <div className={'flex flex-col gap-1'}>
                        <div className={'flex justify-between items-center gap-2 font-montserratRegular text-xl'}>
                            <div>
                                <span>{user?.firstName}</span>
                                <span>{ !user?.lastName ? 'Doe' : user.lastName }</span>
                            </div>
                            <UserForm />
                        </div>
                        <div className={'flex gap-2 font-montserratRegular'}>
                            {/*{ IMAGE LOCATION }*/}
                            <span className={''}>{!user?.countryId ? 'Country' : user.countryId}</span>
                            <span className={''}>{!user?.cityId ? 'City' : user.cityId}</span>
                        </div>
                        <div className={'flex font-montserratLight opacity-60'}>
                            <p>{!user?.bio ? 'We are hope u are place something there' : user.bio}</p>
                        </div>
                    </div>
                </div>
                {/*{SkillS TEMPLATE}*/}
                <div className={'flex flex-wrap gap-5 rounded w-1/3 p-5 bg-white mt-2 '}>
                    <div>
                        Списочек то чего он знает
                    </div>
                </div>
                {/*{CONTRIBUTORS TEMPLATE}*/}
                <div className={'flex flex-wrap gap-5 rounded w-1/3 p-5 bg-white mt-2 '}>
                    <div>
                        Списочек людей которые помогают его идеи
                    </div>
                </div>
            </div>
            {/*{IDEAS TEMPLATE}*/}
            <div className={'flex flex-wrap gap-5 w-full bg-white mt-2'}>
                Тут Идеи Пользователя.... Можно удалить.... все такое посмотреть потыкаться
            </div>
        </div>

    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const userId: string = context.query.userId as string
    const service: ProfileService = injector.get(ProfileService);

    const result = await service.loadUserById(userId);
    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ALL_NAMESPACES)),
                ...result
            }
        }
    )
}