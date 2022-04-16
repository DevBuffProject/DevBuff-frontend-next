


export default function Specialists ({specialist}) {
    return(
        <ul className={'w-36  list-disc flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll' }>
            {
                specialist.map((spec,idx)=>{
                    return(
                        <li key={idx} className={'font-montserratRegular text-black text-xs rounded-xl'}>
                            <span>{spec.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}