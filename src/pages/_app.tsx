import '../styles/globals.css'
import {appWithTranslation} from "next-i18next";
import {wrapper} from '../redux/store'
import type {AppProps} from 'next/app'

const WrappedApp = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
