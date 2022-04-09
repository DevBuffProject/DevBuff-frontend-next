import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection";


export default function CB({code,grant_type})  {
    useEffect( ()=>{
        const service = injector.get(AuthorizationService)
        service.ResolveUser({code,grant_type})
    },[code, grant_type])
    return(
        <div/>
    )
}


export const getServerSideProps = async (ctx) => {
    return(
        {
            props : {
                code : ctx.query.code,
                grant_type : ctx.query.cb
            }
        }
    )
}