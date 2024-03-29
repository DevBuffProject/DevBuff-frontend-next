import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {GetServerSideProps} from "next";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";
import IdeaCard from "../../components/composed/ideas/constructor/idea_card/IdeaCard";
import {injector} from "../../config/DependencyInjection";
import IdeaService from "../../services/idea/IdeaService";
import {IdeaView} from "../../api/idea/objects/IdeaSearchResult";
import {GetServerSidePropsContext} from "next/types";
import PageHandler from "../../components/page_handler/PageHandler";

interface InputParams {
    ideas : Array<IdeaView>
}

export default function Home(params:InputParams) {
    return(
        <div className={'relative flex flex-col w-full mt-14 2xl:ml-20 ml-0'}>
            <PageHandler ideasLength={params.ideas.length} />
            <ul className={' w-auto flex  flex-wrap xl:flex-row flex-col gap-12  p-2'}>
                <IdeaCard ideas={params.ideas} />
            </ul>
            <PageHandler ideasLength={params.ideas.length} />
        </div>
    )
}





export const getServerSideProps: GetServerSideProps = async (context : GetServerSidePropsContext<any>) => {
    const ideaService = injector.get(IdeaService)
    const ideas = await ideaService.getIdeasByParams(context.params.page,[],[])
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, ALL_NAMESPACES)),
            // Will be passed to the page component as props
            ideas : ideas.ideas
        },
    };
}


