import UtilityService from "../../../../../../services/utility/UtilityService";

import {IdeaSpecialist} from "../../../../../../api/idea/objects/IdeaSearchResult";

interface InputParams {
    tech: Array<IdeaSpecialist>
}

export default function Tech(params : InputParams) {
    return(
        <ul className={'w-48  flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll '}>
            {
                params.tech.map((requirements)=>{
                    return(
                        !requirements.languages
                        ? null
                        : requirements.languages.map((tech)=>{
                            return(
                                !tech.technologies
                                ? null
                                : tech.technologies.map((item,idx)=>{
                                    return(
                                        <li key={idx} className={'font-montserratRegular flex gap-2 text-black text-xs items-center  rounded-xl'}>
                                            <div className={`${UtilityService.setColorLanguage(item.name)} rounded-3xl w-2 h-2`}/>
                                            <span>{item.name}</span>
                                        </li>
                                    )
                                })
                            )
                        })
                    )
                })
            }
        </ul>
    )
}