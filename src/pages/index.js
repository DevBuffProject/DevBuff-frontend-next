import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ViewLayout from "../components/layouts/ViewLayout";
import {injector} from "../config/DependencyInjection";
import IdeaService from "../services/idea/IdeaService";
import {useEffect, useState} from "react";

export default function Home() {
    //Demo usage, is not a preferred code!
    const ideaService = injector.get(IdeaService)
    const [idea, setIdea] = useState({})
    useEffect(() => {
        ideaService.getIdeasByParams().then(idea => {
            setIdea(idea)
        })
    }, [IdeaService])


    return (
        <ViewLayout>
            {/*<pre>{JSON.stringify(idea, null, '\t')}</pre>*/}
        </ViewLayout>
    )
}


export async function getStaticProps({locale}) {
    return {
        props: {
            ...await serverSideTranslations(locale, ["common", "SideBar"]),
        },
    };
}