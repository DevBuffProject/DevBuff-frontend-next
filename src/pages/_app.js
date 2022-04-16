import '../styles/globals.css'
import { appWithTranslation } from "next-i18next";
import {wrapper} from '../redux/store'
import {injector} from "../config/DependencyInjection";
import NotificationService from "../services/notification/NotificationService";
import ViewLayout from "../components/layouts/ViewLayout";

const WrappedApp = ({Component, pageProps}) => {
    injector.get(NotificationService)
    return(
        <ViewLayout><Component {...pageProps} /></ViewLayout>
    )
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
