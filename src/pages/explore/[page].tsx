import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {GetServerSideProps} from "next";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";
import IdeaCard from "../../components/composed/ideas/constructor/idea_card/IdeaCard.js";
import {injector} from "../../config/DependencyInjection";
import IdeaService from "../../services/idea/IdeaService";
import {IdeaView} from "../../api/idea/objects/IdeaSearchResult";

interface InputParams {
    ideas : Array<IdeaView>
}

export default function Home(params:InputParams) {


    return(
        <div className={'w-3/5 mt-14'}>
            <ul className={'flex flex-col flex-wrap gap-10  p-2'}>
                <IdeaCard ideas={params.ideas} />
            </ul>
        </div>
        // <ViewLayout>
        //     <div className={'overflow-y-scroll h-screen'}>
        //
        //     </div>
        // </ViewLayout>
    )
}





export const getServerSideProps: GetServerSideProps = async (context : any) => {
    const ideaService = injector.get(IdeaService)
    console.log(context)
    const ideas = await ideaService.getIdeasByParams(context.params.page)
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, ALL_NAMESPACES)),
            // Will be passed to the page component as props
            ideas : ideas.ideas
        },
    };
}


