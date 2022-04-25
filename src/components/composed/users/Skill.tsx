import ProfileResult from "../../../services/profile/objects/ProfileResult";


export default function Skill(params : ProfileResult) {
    const skill = params.profile?.skills
    return(
        <ul className={'2xl:flex h-32 shadow  gap-5 w-full overflow-x-scroll'}>
            {
                skill?.map((skillName,idx)=>{
                    return(
                        <li key={idx} className={'w-full mt-2'}>
                            <span className={' top-0 font-montserratRegular text-xl'}>{skillName.name}</span>
                            <div className={''}>
                                <ul>
                                    {
                                        skillName.specializations?.map((specializationName,idx)=>{
                                            return(
                                                <li className={'w-32 mt-2'}  key={idx}>
                                                    <span className={'font-montserratRegular text-base'}>{specializationName.name}</span>
                                                    <ul className={'list-disc pl-5'}>
                                                        {specializationName.frameworks?.map((framework,idx)=>{
                                                            return <li key={idx}><span className={'font-montserratRegular text-xs'}>{framework.name}</span></li>
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}