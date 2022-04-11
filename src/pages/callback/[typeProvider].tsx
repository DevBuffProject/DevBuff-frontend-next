import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {TypeProvider} from "../../api/authorization/AuthorizationApi";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

type OAuthCallbackContext = {
    code: string,
    typeProvider: TypeProvider
}

export default function OAuthCallback(context: OAuthCallbackContext) {
    const router = useRouter()
    useEffect(() => {
        const service = injector.get(AuthorizationService)
        service.authorizeViaOAuth2(context.code, context.typeProvider)
            .then(() => {
                router.back()
            })
    }, [context])
    return (
        <div/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const typeProvider = (context.query.typeProvider as string) as TypeProvider;

    return (
        {
            props: {
                ...(await serverSideTranslations(context.locale as string, ["common", "SideBar"])),
                code: context.query.code as string,
                typeProvider: typeProvider
            }
        }
    )
}