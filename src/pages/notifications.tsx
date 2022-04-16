import {GetServerSideProps} from "next";
/**
 * import Profile from "../../api/profile/objects/Profile";
 */
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export default function Notifications() {


    return (
        <>
        </>

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