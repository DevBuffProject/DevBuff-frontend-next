import UtilityService from "../../../../../../services/utility/UtilityService";

import {IdeaSpecialist} from "../../../../../../api/idea/objects/IdeaSearchResult";

interface InputParams {
    specialist: Array<IdeaSpecialist>
}

export default function Specialists (params : InputParams) {

    const specialistsArray : Array<IdeaSpecialist> = params.specialist

    const specialist = specialistsArray.map((spec)=>{
        return spec.name
    })

    return(
        specialist.length === 0
        ? null
        :<>
            <span>Специалисты</span>
            <ul className={'w-48   flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll' }>
                {
                    specialist.filter((spec,idx)=>{
                        return specialist.indexOf(spec) == idx;
                    }).map((spec,idx)=>{
                        return  <li key={idx} className={'font-montserratRegular flex gap-2 text-black text-xs items-center  rounded-xl'}>
                            <div className={`${UtilityService.setColorLanguage(spec)}  rounded-3xl w-2 h-2`}/>
                            <span>{(spec).toUpperCase()} Developer</span>
                        </li>
                    })
                }
            </ul>
        </>
    )
}