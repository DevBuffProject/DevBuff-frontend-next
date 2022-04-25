import {injector} from "../../../config/DependencyInjection";
import IdeaService from "../../../services/idea/IdeaService";
import {useEffect, useState} from "react";

import Image from "next/image";


export default function SelfIdeas() {
    const [ideas,setIdeas] = useState([]);

    const ideaService = injector.get(IdeaService);

    useEffect(()=>{
        ideaService.getIdeasSelf()
            .then((result : any) => setIdeas(result))
    })
    return(
        <ul className={'flex gap-4 mt-2'}>
            {
                !ideas
                ? null
                :
               ideas.map((idea:any,idx)=>{
                   return(
                       <li className={'flex flex-col w-1/3 bg-white rounded p-5'} key={idx}>
                           <div className={'flex justify-between items-center font-montserratBold text-blue-500 text-2xl'}>
                                <div className={'h-12 w-12 rounded-3xl'}><Image src={`${ideaService.getLogo(idea.id)}`}  width={30} height={30} layout={'responsive'} unoptimized /></div>
                                <span>{idea.name}</span>
                           </div>
                           <span className={'mt-4 break-words font-montserratRegular opacity-60'}>
                               {idea.description}
                           </span>
                       </li>
                   )
               })
            }
        </ul>
    )
}