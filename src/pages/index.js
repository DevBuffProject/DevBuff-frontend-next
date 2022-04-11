import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ViewLayout from "../components/layouts/ViewLayout";

export default function Home() {
    return(
        <ViewLayout>
        </ViewLayout>
    )
}


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ["common", "SideBar"]),
        },
    };
}