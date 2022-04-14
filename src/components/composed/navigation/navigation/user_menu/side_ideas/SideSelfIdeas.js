import Image from "next/image";
import {BASE_URL,injector} from "../../../../../../config/DependencyInjection";
import IdeaService from "../../../../../../services/idea/IdeaService";
import {useEffect, useState} from "react";



export default function SideSelfIdeas () {

    const [selfIdeas,setSelfIdeas] = useState([])
    const service = injector.get(IdeaService)
    const baseUrl = injector.get(BASE_URL)
    useEffect(()=>{
        service.getIdeasSelf().then(result=>setSelfIdeas(result))
    },[true])

    return(
        <>
            <span className={'text-xxs opacity-50 font-montserratBold'}>Идеи</span>
                <ul className={'p-0 mt-1 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
                    {
                        selfIdeas.map((idea,idx)=>{
                            return(
                                <li key={idx} className={'flex items-center gap-10 group cursor-pointer'}>
                                    <div className={'w-8  items-center h-7 p-0 m-0 opacity-60 rounded overflow-hidden'}>
                                        {
                                                //NO IMG ???? Review
                                        }
                                        <Image priority src={`${baseUrl}/files/idea/${idea.id}/logo`} width={30} height={30} layout={'responsive'} quality={65}  />
                                    </div>
                                    <span className={'text-xs opacity-60 font-montserratBold'}>{idea.name}</span>
                                    <div className={'absolute right-5 opacity-0 rotate-90  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                                        <Image src={'/images/arrow-up.gif'} width={20} height={20} />
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li className={'flex items-center pb-2 pt-2 gap-2 group cursor-pointer'}>
                        <div className={'w-10 p-0 m-0 opacity-60'}>
                            <Image src={'/icons/plus.svg'} width={20} height={20} />
                        </div>
                        <span className={'text-xs opacity-60 font-montserratBold'}>Рассказать идею</span>
                        <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                            <Image src={'/images/card-outline.gif'} width={20} height={20} />
                        </div>
                    </li>
                </ul>
        </>
    )
}