import {injector} from "../../../config/DependencyInjection";
import IdeaService from "../../../services/idea/IdeaService";
import {useEffect, useState} from "react";

import Image from "next/image";
import {useRouter} from "next/router";


export default function SelfIdeas() {
    const router = useRouter()
    const [ideas,setIdeas] = useState([]);

    const ideaService = injector.get(IdeaService);

    useEffect(()=>{
        ideaService.getIdeasOwner(router.query.userId as string)
            .then((result:any) =>setIdeas(result))
    },[true])
    return(
        <ul className={'flex flex-col md:flex-row gap-4 mt-2'}>
            {
                !ideas
                ? null
                :
               ideas.map((idea:any,idx)=>{
                   return(
                       <li className={'flex flex-col w-full md:w-1/3 bg-white rounded p-5'} key={idx}>
                           <div className={'md:flex md:justify-between block items-center font-montserratBold text-blue-500 xl:text-2xl lg:text-xl md:text-base text-base'}>
                                <div className={'h-12 w-12 sm:block md:block rounded-3xl'}><Image src={`${ideaService.getLogo(idea.id)}`}  width={30} height={30} layout={'responsive'} unoptimized /></div>
                                <span>{idea.name}</span>
                           </div>
                           <span className={'mt-4 break-words font-montserratRegular opacity-60 xl:text-base lg:text-sm text-sm'}>
                               {idea.description}
                           </span>
                       </li>
                   )
               })
            }
        </ul>
    )
}