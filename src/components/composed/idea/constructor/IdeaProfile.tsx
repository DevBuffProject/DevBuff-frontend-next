import Image from "next/image";

import Idea from "../../../../api/idea/objects/Idea";

export default  function IdeaProfile(idea : Idea) {
    return(
        <div className={'flex items-center  flex-wrap gap-3'}>
            <div className={'w-20 h-20'}>
                <Image src={'/icons/logo.svg'} width={130} height={130} layout={'responsive'} unoptimized />
            </div>
            <div>
                <span className={'font-montserratRegular text-sm md:text-xl'}>{idea.name}</span>
            </div>
            Тут наверное еще что я не знаю чета
        </div>
    )
}