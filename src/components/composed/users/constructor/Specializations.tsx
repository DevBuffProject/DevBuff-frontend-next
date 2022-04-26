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
                                <span className={'font-montserratRegular xl:text-base lg:text-xs text-xs'}>{specializationName.name}</span>
                                <Frameworks  {...specializationName} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}