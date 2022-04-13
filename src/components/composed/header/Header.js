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
        <>
            </>
        // <header className={'sticky top-0'}>
        //     <div className={'w-full pl-10 flex items-center'}>
        //         <div className={'bg-logo backdrop-blur-3xl  mt-2  pl-2 pr-2 w-fit  flex justify-center items-center rounded-2xl hover:bg-white transition ease-in-out duration-500'}>
        //             <Link href={'/explore/1'}>
        //                 <a className={'translate-y-0.5'}>
        //                     <Image src={'/images/logo-dark.svg'}
        //                            width={180}
        //                            height={50}
        //                     />
        //                 </a>
        //             </Link>
        //         </div>
        //         <div>
        //
        //         </div>
        //     </div>
        //
        // </header>
    )
}