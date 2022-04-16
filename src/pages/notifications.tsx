import {GetServerSideProps} from "next";
/**
 * import Profile from "../../api/profile/objects/Profile";
 */
import ViewLayout from "../components/layouts/ViewLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export default function Notifications() {


    return (
        <ViewLayout>
        </ViewLayout>

    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ["common", "SideBar", "SideMenu"])),
            }
        }
    )
}