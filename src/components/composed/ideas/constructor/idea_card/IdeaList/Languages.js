

export default function Languages ({lang}) {

    return(
        <ul className={'w-36  list-disc flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll'}>
                {
                    lang.map((requirements,idx)=>{
                        return(
                            !requirements.languages
                                ? null
                                : requirements.languages.map((language,idx)=>{
                                    return(
                                        <li key={idx} className={'font-montserratRegular text-black text-xs  rounded-xl'}>
                                             <span>{language.name}</span>
                                        </li>
                                )
                            })
                        )
                    })
                }
        </ul>
    )
}