import ViewLayout from "../../components/layouts/ViewLayout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function Home() {

    return(
        <ViewLayout>
        </ViewLayout>
    )
}





export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "home"])),
            // Will be passed to the page component as props
        },
    };
}


