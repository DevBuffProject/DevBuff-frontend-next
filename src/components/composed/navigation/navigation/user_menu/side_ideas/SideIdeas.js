import Image from "next/image";


export default function SideIdeas () {
    return(
        <>
            <span className={'text-xxs opacity-50 font-montserratBold'}>Идеи</span>
            <ul className={'p-0 mt-1 flex  flex-col items-start justify-start gap-8 border-b pb-5'}>
                <li className={'flex items-center gap-2 group cursor-pointer'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                       <Image src={'/icons/testIdeaIcon.svg'} width={20} height={20} />
                    </div>
                    <span className={'text-xs opacity-60 font-montserratBold'}>Имя идеи</span>
                    <div className={'absolute right-5 opacity-0 rotate-90  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                        <Image src={'/images/arrow-up.gif'} width={20} height={20} />
                    </div>
                </li>
                <li className={'flex items-center pb-2 pt-2 gap-2 group cursor-pointer'}>
                    <div className={'w-10 p-0 m-0 opacity-60'}>
                        <Image src={'/icons/plus.svg'} width={20} height={20} />
                    </div>
                    <span className={'text-xs opacity-60 font-montserratBold'}>Рассказать идею</span>
                    <div className={'absolute right-5 opacity-0  group-hover:opacity-40 group-hover:visible transition ease-in-out duration-500'}>
                        <Image src={'/images/card-outline.gif'} width={20} height={20} />
                    </div>
                </li>
            </ul>
        </>
    )
}