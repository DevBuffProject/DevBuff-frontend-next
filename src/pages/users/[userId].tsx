import {GetServerSideProps} from "next";
import {injector} from "../../config/DependencyInjection";
import ProfileService from "../../services/profile/ProfileService";
import ProfileResult from "../../services/profile/objects/ProfileResult";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";

import Link from 'next/link'
import ProfileForm from "src/components/composed/users/Profile";
import Skill from "../../components/composed/users/Skill";
import SelfIdeas from "../../components/composed/users/SelfIdeas";



export default function UserProfile(profileResult: ProfileResult) {
    // const profileService = injector.get(ProfileService)
    // const userID : string | undefined = profileResult.profile?.id
    // const user : ProfileResult | undefined = profileResult.profile


    if (profileResult.profile === undefined) {
        return <div className={'flex gap-2 items-center justify-center bg-blue-50 w-screen h-screen'}><span className={'font-montserratThin text-md'}>Something went wrong, go</span><Link href={'/explore/1'}><a><span className={'font-montserratBold text-x4l opacity-80 text-blue-400'}>Back</span></a></Link></div>
    }

    return (
        <div className={"w-full  bg-blue-50 p-10"}>
            <span className={'text-4xl font-montserratThin opacity-60'}>Profile</span>
            <div className={'flex-wrap flex gap-4'}>
                {/*{USER TEMPLATE}*/}
                    <ProfileForm {...profileResult} />
                {/*{SkillS TEMPLATE}*/}
                <div className={'flex flex-wrap gap-5 rounded w-1/3 p-5 bg-white mt-2 overflow-y-scroll'}>
                    <span className={'font-montserratRegular'}>Skills</span>
                    <Skill {...profileResult} />
                </div>
                {/*{CONTRIBUTORS TEMPLATE}*/}
                <div className={'flex flex-wrap gap-5 rounded w-1/3 p-5 bg-white mt-2 '}>
                    <div>
                        Списочек людей которые помогают его идеи
                    </div>
                </div>
            </div>
            {/*{IDEAS TEMPLATE}*/}
            <div className={'gap-5 w-full mt-2'}>
                <span className={'text-4xl font-montserratThin opacity-60'}>Your ideas</span>
                <SelfIdeas />
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