import Image from "next/image";
// import Link from 'next/link'

import Specialists from "./IdeaList/Specialists";
import Tech from "./IdeaList/Tech";
import Languages from "./IdeaList/Languages";
import {injector} from "../../../../../config/DependencyInjection";
import ProfileService from "../../../../../services/profile/ProfileService";
import IdeaService from "../../../../../services/idea/IdeaService";
import TimeAgo from "react-timeago";
import {IdeaView} from "../../../../../api/idea/objects/IdeaSearchResult";
import {useRouter} from "next/router";
import {useState} from "react";
import {Oval} from "react-loader-spinner";

export interface InputParams {
    ideas: Array<IdeaView>
}

export default function IdeaCard(params: InputParams): any {

    const  [load,setLoad] = useState<string>('hidden');

    const router = useRouter();

    const profileService = injector.get(ProfileService)
    const ideaService = injector.get(IdeaService)

    const handleIdea = (id : string) => {
       if (router.query.page) {
            setLoad('block')
        }
        router.push(`/idea/explore/${id}`)
    }

    return (
        params.ideas.map((idea, idx) => {
            return (
                <>
                    <div key={idx} className={'2xl:w-1/4 xl:w-1/3  w-full'}>
                        <div className={'flex items-center gap-3 '}>
                            <div className={'h-7 w-7 rounded'}>
                                <Image src={`${profileService.getAvatar(idea.ownerIdea.id)}`}
                                       width={30} height={30}
                                       layout={'responsive'} unoptimized/>
                            </div>
                            <div>
                                <span className={'font-montserratRegular text-sm'}>@{idea.ownerIdea.userName}</span>
                            </div>
                        </div>
                        <div className={'mt-2 bg-white p-3 border border-gray-200 p-0'}>
                            <div className={'grid grid-rows-12 grid-flow-col gap-x-2 border-b border-gray-200'}>
                                <div className={'row-span-3'}>
                                    <div className={'rounded-3xl ml-2 mt-2 mb-2'}><Image
                                        src={`${ideaService.getLogo(idea.id)}`} width={100} height={100}
                                        layout={'responsive'} unoptimized/></div>
                                </div>
                                <div className={'col-span-10 mt-1'}>
                                    <div className={'font-montserratBold text-xl'}>{idea.name}</div>
                                </div>

                                <div className={'row-span-1 col-span-10 p-0'}>
                                    <span className={'font-montserratRegular text-xs'}>
                                        <TimeAgo date={idea.publishDate}/>
                                    </span>
                                </div>
                            </div>

                            <div className={'flex flex-wrap break-all mt-2 ml-5 mr-5'}>
                                <p className={'font-montserratRegular break-all opacity-80 text-sm break-words'}>{idea.description}</p>
                            </div>
                            <div className={'flex flex-wrap lg:flex-row flex-col gap-10 mt-4 ml-4'}>
                                <div className={'mt-2 flex flex-col font-montserratBold text-xs text-gray-400'}>
                                    <Specialists specialist={idea.requirements}/>
                                </div>
                                <div className={'mt-2 flex flex-col font-montserratBold text-xs text-gray-400'}>
                                    <Tech tech={idea.requirements}/>
                                </div>
                                <div className={'mt-2 flex flex-col font-montserratBold text-xs text-gray-400'}>
                                    <Languages specialists={idea.requirements}/>
                                </div>
                            </div>
                            <div className={'flex justify-between flex p-2 border-t border-gray-200'}>
                                <span className={'col-span-5 p-0 font-montserratLight text-gray-400 text-sm'}>
                                    Views: 1515
                                </span>
                                {/*<Link href={`/idea/${idea.id}`}>*/}
                                <button onClick={()=>handleIdea(idea.id)} className={' bg-blue-400 pt-1 pr-4 pb-1 pl-4 rounded text-white font-montserratLight text-xs'}>
                                    Подробнее
                                </button>
                                {/*</Link>*/}
                            </div>
                        </div>
                    </div>
                    <div className={`fixed h-screen w-screen flex justify-center items-center z-10 bg-gray-50 ${load}   opacity-20`}>
                        <Oval
                            height="100"
                            width="100"
                            color='blue'
                            ariaLabel='loading'
                        />
                    </div>
                </>
            )
        })
    )
}