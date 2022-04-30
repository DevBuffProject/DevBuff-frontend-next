import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import MobileAuthorization from "../navigation/navigation/authorization/MobileAuthorization";
import {connect} from "react-redux";

export  function Header() {

    const router = useRouter()

    const { t } = useTranslation('common')

    const handleLocaleChange = (event) => {
        const value = event.target.value;
        router.push(router.route, router.asPath, {
            locale: value,
        });
    };


    return(
        <header className={'w-full sticky top-0'}>
            <div className={'w-full  flex items-center'}>
                <div className={'w-full bg-logo backdrop-blur-3xl  mt-2  pl-2 pr-2  items-center rounded-2xl hover:bg-white transition ease-in-out duration-500'}>
                    <MobileAuthorization />
                </div>
            </div>
        </header>
    )
}

export default connect((state) => state, null)(Header)