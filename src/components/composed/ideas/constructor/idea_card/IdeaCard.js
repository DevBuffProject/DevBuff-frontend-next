import Image from "next/image";

import Specialists from "./IdeaList/Specialists";
import Tech from "./IdeaList/Tech";
import Languages from "./IdeaList/Languages";
import {injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import IdeaService from "../../../../../services/idea/IdeaService";
import TimeAgo from "react-timeago";


export default function IdeaCard({ideas}) {

    const profileService = injector.get(ProfileService)
    const ideaService = injector.get(IdeaService)
    console.log(ideas)
    return(
       ideas.map((idea,idx)=>{
           return (
               <li key={idx} className={'w-3/5'}>
                   <div className={''}>
                       <div className={'flex items-center gap-3'}>
                           <div className={'h-7 w-7 rounded'}><Image src={`${profileService.getAvatar(idea.ownerIdea.id)}`}  width={30} height={30} layout={'responsive'} unoptimized /></div>
                           <div>
                               <span className={'font-montserratThin text-xs'}>@{idea.ownerIdea.userName}</span>
                           </div>
                           <div>
                               <span className={'font-montserratThin text-xs'}><TimeAgo date={idea.publishDate} /></span>
                           </div>
                       </div>
                       <div className={'mt-4 bg-gray-100 p-3 rounded'}>
                           <div className={'flex items-center justify-between'}>
                               <div className={'font-montserratBold text-blue-500 text-xl'}>{idea.name}</div>
                               <div className={'h-7 w-7 rounded-3xl'}><Image src={`${ideaService.getLogo(idea.id)}`}  width={30} height={30} layout={'responsive'} unoptimized /></div>
                           </div>
                           <div className={'break-words mt-2 font-montserratLight opacity-80 text-sm'}>
                               <p>{idea.description}</p>
                           </div>
                           <div className={'flex flex-wrap gap-10 mt-4'}>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <span>Специалисты</span>
                                   <Specialists specialist={idea.requirements} />
                               </div>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <span>Технологии</span>
                                   <Tech tech={idea.requirements}  />
                               </div>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <span>Языки программирования</span>
                                   <Languages lang={idea.requirements}  />
                               </div>
                           </div>
                           <div className={'flex justify-end mt-2'}>
                               <button className={'bg-blue-400 pt-1 pr-4 pb-1 pl-4 rounded text-white font-montserratLight text-xs'}>Подробнее</button>
                           </div>
                       </div>
                   </div>
               </li>
           )
       })
    )
}