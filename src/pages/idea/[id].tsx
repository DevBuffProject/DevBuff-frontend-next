import {GetServerSidePropsContext} from "next/types";
import {injector} from "../../config/DependencyInjection";
import IdeaService from "../../services/idea/IdeaService";
import Idea from "../../api/idea/objects/Idea";
import IdeaView from "src/components/composed/idea/Idea";


export default function IdeaPage(idea : Idea) {
    console.log(idea)
    return(
        <IdeaView />
    )
}


export const getServerSideProps = async (context : GetServerSidePropsContext<any>) => {
    const ideaService = injector.get(IdeaService);

    const id = context.query.id;
    const response = await ideaService.getIdea(id);

    return {
        props : {
            ...response
        }
    }
}