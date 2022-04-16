import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {TypeProvider} from "../../api/authorization/AuthorizationApi";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {ALL_NAMESPACES} from "../../config/I18nConfiguration";

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
                router.push("/", router.basePath, {
                    locale: router.locale,
                });
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
                ...(await serverSideTranslations(context.locale as string, ALL_NAMESPACES)),
                code: context.query.code as string,
                typeProvider: typeProvider
            }
        }
    )
}