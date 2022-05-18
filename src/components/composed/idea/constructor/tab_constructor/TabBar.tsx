import Link from 'next/link'
import {useRouter} from "next/router";
import Image from "next/image";
// import {useState} from "react";


export default function TabBar() {
    const router = useRouter()

    // const [explore,SetExplore] = useState('border-b-0');

    const handleExplore = () => {
        if (router.pathname.includes('explore')) {
            return
        }
        router.push(`explore/${router.query.id}`)

    }
    return(
        <nav className={'w-full'}>
            <ul className={'flex  gap-10'}>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'}>
                    <button onClick={handleExplore}>
                        <div className={'flex items-center gap-2'}>
                            <div className={'w-4 h-4'}>
                                <Image src={'/icons/card-text.svg'} width={130} height={130} layout={'responsive'} unoptimized />
                            </div>
                            <span>Обзор</span>
                        </div>
                    </button>
                </li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Вакансии</span></div></a></Link></li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Roadmap</span></div></a></Link></li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Настройки</span></div></a></Link></li>
            </ul>
        </nav>
    )
}