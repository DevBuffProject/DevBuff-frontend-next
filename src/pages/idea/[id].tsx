import {GetServerSidePropsContext} from "next/types";
import {injector} from "../../config/DependencyInjection";
import IdeaService from "../../services/idea/IdeaService";
import Idea from "../../api/idea/objects/Idea";
import IdeaProfile from "../../components/composed/idea/constructor/IdeaProfile";
import TabBar from "../../components/composed/idea/constructor/tab_constructor/TabBar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";


export default function IdeaPage(idea : Idea) {
    console.log(idea)
    return(
        <div className={'w-full flex flex-col mt-10 gap-5 ml-4'}>
            <IdeaProfile {...idea} />
            <TabBar />
        </div>
    )
}


export const getServerSideProps = async (context : GetServerSidePropsContext<any>) => {
    const ideaService = injector.get(IdeaService);

    const id = context.query.id;
    const response = await ideaService.getIdea(id);

    return {
        props : {
            ...await serverSideTranslations(context.locale as string, ALL_NAMESPACES),
            ...response
        }
    }
}