import ViewLayout from "../../components/layouts/ViewLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {Helmet} from "react-helmet";

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


