import {useRouter} from "next/router";
import {useEffect} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {UserMenu} from "../components/composed/navigation/navigation/user_menu/UserMenu";
import ViewLayout from "../components/layouts/ViewLayout";

export default function Home() {
    return(
        <ViewLayout>
        </ViewLayout>
    )
}
export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "SideBar"])),
            // Will be passed to the page component as props
        },
    };
}