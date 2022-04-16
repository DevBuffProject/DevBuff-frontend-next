import '../styles/globals.css'
import { appWithTranslation } from "next-i18next";
import {wrapper} from '../redux/store'
import ViewLayout from "../components/layouts/ViewLayout";

const WrappedApp = ({Component, pageProps}) => {
    return(
        <ViewLayout><Component {...pageProps} /></ViewLayout>
    )
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
