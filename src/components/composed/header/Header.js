import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <header className={'sticky top-0 bg-white shadow-lg shadow-gray-300'}>
            <div className={'w-1280 flex justify-between items-center mx-auto'}>
                <Link href={'/explore/1'}>
                    <a>
                        <Image src={'/images/logo-dark.svg'}
                               width={100}
                               height={60}
                        />
                    </a>
                </Link>
                <button className={'border-none bg-transparent text-center cursor-pointer'}>
                    <Image src={'/images/light.svg'}
                           width={30}
                           height={30}
                    />
                </button>
            </div>
        </header>
    )
}