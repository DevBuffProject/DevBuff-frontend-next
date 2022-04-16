import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {GetServerSideProps} from "next";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";
import Ideas from "../../components/composed/ideas/Ideas";

export default function Home() {
//THIS IS TEST CONTENT
    return(
        <div className={' '}>
            <Ideas />
        </div>
        // <ViewLayout>
        //     <div className={'overflow-y-scroll h-screen'}>
        //
        //     </div>
        // </ViewLayout>
    )
}





export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ALL_NAMESPACES)),
            // Will be passed to the page component as props
        },
    };
}


