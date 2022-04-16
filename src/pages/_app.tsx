import '../styles/globals.css'
import {appWithTranslation} from "next-i18next";
import {wrapper} from '../redux/store'
import type {AppProps} from 'next/app'
import ViewLayout from "../components/layouts/ViewLayout";

const WrappedApp = ({Component, pageProps}: AppProps) => {
    return (
        <ViewLayout><Component {...pageProps} /></ViewLayout>
    )
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
