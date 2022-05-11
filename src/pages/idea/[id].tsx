// import {GetServerSidePropsContext} from "next/types";
// import {injector} from "../../config/DependencyInjection";
// import IdeaService from "../../services/idea/IdeaService";
// import Idea from "../../api/idea/objects/Idea";
import IdeaProfile from "../../components/composed/idea/constructor/IdeaProfile";
import TabBar from "../../components/composed/idea/constructor/tab_constructor/TabBar";
import React from "react";


export default function IdeaPage(props:any) {
    return(
        <div className={'w-full flex flex-col mt-10 gap-5 ml-4'}>
            <IdeaProfile  />
            <TabBar />
            {props.children}
        </div>
    )
}


// export const getServerSideProps = async (context : GetServerSidePropsContext<any>) => {
//     const ideaService = injector.get(IdeaService);
//
//     const id = context.query.id;
//     const response = await ideaService.getIdea(id);
//
//     return {
//         props : {
//             ...response
//         }
//     }
// }