import '../styles/globals.css'
import {appWithTranslation} from "next-i18next";
import {wrapper} from '../redux/store'
import {injector} from "../config/DependencyInjection";
import NotificationService from "../services/notification/NotificationService";
// import IdeaPage from "./idea/[id]";
// import ViewLayout from "../components/layouts/ViewLayout";

/**
 * Types
 */
// import type {AppProps} from 'next/app'
// import {NextPage} from "next";
// import {ReactElement, ReactNode} from "react";

// type NextPageWithLayout = NextPage & {
//     getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//     Component: NextPageWithLayout
// }

/**
 * Types
 */

const WrappedApp = ({Component, pageProps}: any) => {
    injector.get(NotificationService)
    const getLayout = Component.getLayout ?? ((page:any)=> page)
    return getLayout(<Component {...pageProps} />)
    // return (
    //     <ViewLayout><Component {...pageProps} /></ViewLayout>
    // )
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
