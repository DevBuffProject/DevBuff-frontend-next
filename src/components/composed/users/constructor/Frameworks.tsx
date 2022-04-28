import {Specialization} from "../../../../api/profile/objects/Skill";


export default function Frameworks(framework : Specialization) {
    return(
        <ul className={'list-disc pl-5'}>
            {framework.frameworks.map((framework, idx)=>{
                    return <li key={idx}><span className={'font-montserratRegular lg:text-xs text-x2s'}>{framework.name}</span></li>
                })}
        </ul>
    )
}