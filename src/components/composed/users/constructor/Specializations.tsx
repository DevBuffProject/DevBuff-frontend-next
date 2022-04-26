import Skill from "../../../../api/profile/objects/Skill";
import Frameworks from "./Frameworks";

export default function Specializations(params : Skill) {
    const spec = params.specializations
    return(
        <div className={''}>
            <ul>
                {
                    spec.map((specializationName, idx)=>{
                        return(
                            <li className={'w-32 mt-2'}  key={idx}>
                                <span className={'font-montserratRegular text-base'}>{specializationName.name}</span>
                                <Frameworks  {...specializationName} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}