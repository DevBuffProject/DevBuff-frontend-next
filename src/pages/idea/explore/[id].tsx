import {GetServerSidePropsContext} from "next/types";
import {GetServerSideProps} from "next";
import {injector} from "../../../config/DependencyInjection";
import IdeaService from "../../../services/idea/IdeaService";
import Idea from "../../../api/idea/objects/Idea";
import IdeaPage from "../[id]";


export default function ExploreTab(idea: Idea) {
    console.log(idea)
    return(
        <IdeaPage>
            asdasdasd
        </IdeaPage>
    )
}


export const getServerSideProps: GetServerSideProps = async (context : GetServerSidePropsContext<any>) => {
    const ideaService = injector.get(IdeaService);
    const idea_id = context.query.id;

    const response = await ideaService.getIdea(idea_id);
    return{
        props : {
            ...response
        }
    }
}