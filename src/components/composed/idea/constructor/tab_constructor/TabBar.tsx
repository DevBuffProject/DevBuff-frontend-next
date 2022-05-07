import Link from 'next/link'


export default function TabBar() {
    return(
        <nav className={'w-full'}>
            <ul className={'flex  gap-10'}>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Обзор</span></div></a></Link></li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Вакансии</span></div></a></Link></li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Roadmap</span></div></a></Link></li>
                <li className={'text-sm font-montserratLight opacity-40 hover:border-b-2 hover:opacity-90 ease-in-out duration-200'}><Link href={'#'}><a><div>IMG <span>Настройки</span></div></a></Link></li>
            </ul>
        </nav>
    )
}