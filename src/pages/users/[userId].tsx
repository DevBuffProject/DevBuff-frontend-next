import {GetServerSideProps} from "next";
import {injector} from "../../config/DependencyInjection";
import ProfileService from "../../services/profile/ProfileService";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";

import ProfileForm from "src/components/composed/users/Profile";
import Skill from "../../components/composed/users/Skill";
import SelfIdeas from "../../components/composed/users/SelfIdeas";
import RemoteResource from "../../services/utility/RemoteResource";
import Profile from "../../api/profile/objects/Profile";
import StatusHandler from "../../components/status_handler/StatusHandler";
import {ReactElement} from "react";
import ViewLayout from "../../components/layouts/ViewLayout";


export default function UserProfile(profileRemoteResource: RemoteResource<Profile>) {

    return (
        <StatusHandler remoteResource={profileRemoteResource}>
            <div className={"w-full  bg-blue-50 md:p-10 sm:p-0"}>
                <span
                    className={'text-4xl font-montserratThin md:justify-start flex justify-center opacity-60'}>Profile</span>
                <div className={'flex flex-wrap flex-col md:flex-row gap-4'}>
                    {/*{USER TEMPLATE}*/}
                    <ProfileForm profile={profileRemoteResource.data as Profile} />
                    {/*{SkillS TEMPLATE}*/}
                    <div
                        className={'flex flex-wrap 2xl:h-40 h-40 gap-5 rounded w-full md:w-1/3 p-5 bg-white mt-2 overflow-y-scroll'}>
                        <span className={'font-montserratRegular '}>Skills</span>
                        <Skill profile={profileRemoteResource.data as Profile} />
                    </div>
                    {/*{CONTRIBUTORS TEMPLATE}*/}
                    <div className={'flex flex-wrap gap-5 rounded w-full md:w-1/3 p-5 bg-white mt-2 '}>
                        <div>
                            Списочек людей которые помогают его идеи
                        </div>
                    </div>
                </div>
                {/*{IDEAS TEMPLATE}*/}
                <div className={'gap-5 w-full mt-2'}>
                    <span className={'text-4xl font-montserratThin opacity-60  md:justify-start flex justify-center'}>Your ideas</span>
                    <SelfIdeas/>
                </div>
            </div>
        </StatusHandler>
    )
}

UserProfile.getLayout= function getLayout(page: ReactElement) {
    return(
        <ViewLayout>
            {page}
        </ViewLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const userId: string = context.query.userId as string
    const service: ProfileService = injector.get(ProfileService);

    const result = await service.getProfileById(userId);
    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ALL_NAMESPACES)),
                ...result
            }
        }
    )
}