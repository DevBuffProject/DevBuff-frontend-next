import UtilityService from "../../../../../../services/utility/UtilityService";

import {IdeaSpecialist} from "../../../../../../api/idea/objects/IdeaSearchResult";

interface InputParams {
    tech: Array<IdeaSpecialist>
}

export default function Tech(params : InputParams) {

    const technologies : Array<IdeaSpecialist> = params.tech

    const tech = technologies.flatMap((spec)=>{
        return(
            spec.languages.flatMap((tech)=>{
                return(
                    tech.technologies.map((tech)=>{
                        return tech.name
                    })
                )
            })
        )
    })

    return(
        tech.length === 0
        ? null
        :
            <>
                <span>Технологии</span>
                <ul className={'w-48  flex flex-col  gap-2 mt-1 p-4 rounded bg-blue-50 h-24 overflow-y-scroll '}>
                    {
                        tech.filter((technology,idx)=>{
                            return tech.indexOf(technology) == idx
                        }).map((item,idx)=>{
                            return(
                                <li key={idx} className={'font-montserratRegular flex gap-2 text-black text-xs items-center  rounded-xl'}>
                                    <div className={`${UtilityService.setColorLanguage(item)} rounded-3xl w-2 h-2`}/>
                                    <span>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
    )
}