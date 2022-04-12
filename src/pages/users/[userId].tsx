import {GetServerSideProps} from "next";
import {injector} from "../../config/DependencyInjection";
import ProfileService from "../../services/profile/ProfileService";
import Profile from "../../api/profile/objects/Profile";
import ViewLayout from "../../components/layouts/ViewLayout";
import ProfileResult from "../../services/profile/objects/ProfileResult";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export default function UserProfile(profileResult: ProfileResult) {

    if (profileResult.profile === undefined) {
        switch (profileResult.status) {
            case 401: {
                return (
                    <div>Access Denied</div>
                )
            }
            case 404: {
                return (
                    <div>Not found</div>
                )
            }
            default: {
                return <div/>
            }
        }
    }

    const profile: Profile = profileResult.profile

    return (
        <ViewLayout>
            <div className={"mt-5"}>
                <ul>
                    <li>{profile.id}</li>
                    <li>{profile.status}</li>
                    <li>{profile.firstName} {profile.lastName}</li>
                </ul>
            </div>
        </ViewLayout>

    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const userId: string = context.query.userId as string
    const service: ProfileService = injector.get(ProfileService);

    const result = await service.loadUserById(userId);
    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ["common", "SideBar"])),
                ...result
            }
        }
    )
}