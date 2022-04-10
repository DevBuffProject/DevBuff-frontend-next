import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {Home} from "../explore/[page]";


export default function CB({code, typeProvider}) {
    const router = useRouter()
    useEffect(() => {
        const service = injector.get(AuthorizationService)
        service.authorizeViaOAuth2(code, typeProvider)
            .then(()=>{
                router.push('/')
            })
    }, [code, typeProvider])
    return (
        <div/>
    )
}


export const getServerSideProps = async (ctx) => {
    return (
        {
            props: {
                code: ctx.query.code,
                typeProvider: ctx.query.cb
            }
        }
    )
}