import '../styles/globals.css'
import { appWithTranslation } from "next-i18next";
import {wrapper} from '../redux/store'

const WrappedApp = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}


export default wrapper.withRedux(appWithTranslation(WrappedApp))
