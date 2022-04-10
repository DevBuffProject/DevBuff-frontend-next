import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

export default function Header() {

    const router = useRouter()

    const { t } = useTranslation('common')

    const handleLocaleChange = (event) => {
        const value = event.target.value;
        router.push(router.route, router.asPath, {
            locale: value,
        });
    };


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
                <select onChange={handleLocaleChange} value={router.locale}>
                    <option value="en">🇺🇸 English</option>
                    <option value="ru">🇨🇳 Russia</option>
                </select>
            </div>

        </header>
    )
}