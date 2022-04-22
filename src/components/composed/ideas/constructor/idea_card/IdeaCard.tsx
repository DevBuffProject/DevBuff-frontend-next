import Image from "next/image";

import Specialists from "./IdeaList/Specialists";
import Tech from "./IdeaList/Tech";
import Languages from "./IdeaList/Languages";
import {injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import IdeaService from "../../../../../services/idea/IdeaService";
import TimeAgo from "react-timeago";
import {IdeaView} from "../../../../../api/idea/objects/IdeaSearchResult";

export interface InputParams {
    ideas : Array<IdeaView>
}

export default function IdeaCard(params:InputParams) : any {

    const profileService = injector.get(ProfileService)
    const ideaService = injector.get(IdeaService)

    const handleIdea = () => {
        alert('Тут нужно переходить на страничку идеи')
    }

    return(
       params.ideas.map((idea,idx)=>{
           return (
               <li key={idx} className={'w-4/5'}>
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
                       <div className={'mt-4 bg-white p-3 rounded'}>
                           <div className={'flex items-center justify-between'}>
                               <div className={'font-montserratBold text-blue-500 text-xl'}>{idea.name}</div>
                               <div className={'h-7 w-7 rounded-3xl'}><Image src={`${ideaService.getLogo(idea.id)}`}  width={30} height={30} layout={'responsive'} unoptimized /></div>
                           </div>
                           <div className={'break-words mt-2 font-montserratLight opacity-80 text-sm'}>
                               <p>{idea.description}</p>
                           </div>
                           <div className={'flex flex-wrap gap-10 mt-4'}>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <Specialists specialist={idea.requirements} />
                               </div>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <Tech tech={idea.requirements}  />
                               </div>
                               <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                                   <Languages specialists={idea.requirements}  />
                               </div>
                           </div>
                           <div className={'flex justify-end mt-2'}>
                               <button onClick={handleIdea} className={'bg-blue-400 pt-1 pr-4 pb-1 pl-4 rounded text-white font-montserratLight text-xs'}>Подробнее</button>
                           </div>
                       </div>
                   </div>
               </li>
           )
       })
    )
}