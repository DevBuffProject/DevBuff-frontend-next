
//THIS IS TEST CONTENT

export default function Tech({tech}) {
    return(
        <ul className={'w-36  list-disc flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll '}>
            {
                tech.map((requirements,idx)=>{
                    return(
                        !requirements.languages
                        ? null
                        : requirements.languages.map((tech,idx)=>{
                            return(
                                !tech.technologies
                                ? null
                                : tech.technologies.map((item,idx)=>{
                                    return(
                                        <li key={idx} className={'font-montserratRegular text-black text-xs rounded-xl'}>
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