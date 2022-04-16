import {GetServerSideProps} from "next";
import {injector} from "../../config/DependencyInjection";
import ProfileService from "../../services/profile/ProfileService";
// import Profile from "../../api/profile/objects/Profile";
import UserForm from '../../components/composed/users/UserForm'
import ProfileResult from "../../services/profile/objects/ProfileResult";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";


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

    // const profile: Profile = profileResult.profile

    return (
        <div className={"w-1/3  bg-white p-10"}>
            <UserForm />
            {/*<ul>*/}
            {/*    <li>{profile.id}</li>*/}
            {/*    <li>{profile.status}</li>*/}
            {/*    <li>{profile.firstName} {profile.lastName}</li>*/}
            {/*</ul>*/}
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