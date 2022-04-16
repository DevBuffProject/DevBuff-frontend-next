import {useEffect, useState} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {TypeProvider} from "../../api/authorization/AuthorizationApi";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import Custom401 from '../../components/error/401';
import Loader from '../../components/loader/Loader';
import {AxiosError} from "axios";

type OAuthCallbackContext = {
    code: string,
    typeProvider: TypeProvider
}

export default function OAuthCallback(context: OAuthCallbackContext) {
    const  [error,setError] = useState<number | undefined>(undefined)

    const router = useRouter()
    useEffect(() => {
        const service = injector.get(AuthorizationService)
        service.authorizeViaOAuth2(context.code, context.typeProvider)
            .then(() => {
                router.push("/", router.basePath, {
                    locale: router.locale,
                });
            })
            .catch((err: AxiosError) =>{
                setTimeout(()=>{
                    router.push("/", router.basePath, {
                        locale: router.locale,
                    });
                },3000)
                setError(err.response?.status)
            })
    }, [context])
    return(
        <>
            {
                error
                    ? <Custom401 />
                    : <Loader />
            }
        </>

    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const typeProvider = (context.query.typeProvider as string) as TypeProvider;

    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ["common", "SideBar", "SideMenu"])),
                code: context.query.code as string,
                typeProvider: typeProvider
            }
        }
    )
}