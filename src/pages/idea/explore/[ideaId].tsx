import {GetServerSidePropsContext} from "next/types";
import {GetServerSideProps} from "next";
import {injector} from "../../../config/DependencyInjection";
import IdeaService from "../../../services/idea/IdeaService";
import Idea from "../../../api/idea/objects/Idea";
import IdeaPage from "../[id]";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../../config/I18nConfiguration";


export default function ExploreTab(idea: Idea) {
    console.log(idea)
    return(
        <IdeaPage name={idea.name} description={idea.description}>
            <div className={'flex flex-col items-center justify-start bg-white md:p-2 p-1 rounded'}>
                <span className={'text-center md:text-xl text-base font-montserratRegular'}>Описание</span>
                <div className={'font-montserratLight md:text-base text-xs'} dangerouslySetInnerHTML={{__html: idea.text}} />
            </div>
        </IdeaPage>
    )
}


export const getServerSideProps: GetServerSideProps = async (context : GetServerSidePropsContext<any>) => {
    const ideaService = injector.get(IdeaService);
    const idea_id = context.query.ideaId;

    const response = await ideaService.getIdea(idea_id);
    return{
        props : {
            ...await serverSideTranslations(context.locale as string, ALL_NAMESPACES),
            ...response
        }
    }
}