import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";
import {useRouter} from "next/router";


export default function CB({code, grant_type}) {
    const router = useRouter()
    useEffect(() => {
        const service = injector.get(AuthorizationService)
        service.authorizeViaOAuth2({code, grant_type})
            .then(()=>{
                router.back()
            })
    }, [code, grant_type])
    return (
        <div/>
    )
}


export const getServerSideProps = async (ctx) => {
    return (
        {
            props: {
                code: ctx.query.code,
                grant_type: ctx.query.cb
            }
        }
    )
}