import {GetServerSidePropsContext} from "next/types";
import {GetServerSideProps} from "next";
import {injector} from "../../../config/DependencyInjection";
import IdeaService from "../../../services/idea/IdeaService";
import Idea from "../../../api/idea/objects/Idea";
import IdeaPage from "../[id]";

// @ts-ignore
import renderHTML from 'react-render-html';


export default function ExploreTab(idea: Idea) {
    console.log(idea)
    return(
        <IdeaPage>
            <div className={'flex flex-col items-center justify-start bg-white md:p-2 p-1 rounded'}>
                <span className={'text-center md:text-xl text-base font-montserratRegular'}>Описание</span>
                <p className={'font-montserratLight md:text-base text-xs'}>{renderHTML(idea.text)}</p>
            </div>
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