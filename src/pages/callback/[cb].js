import {useEffect} from "react";
import {useRouter} from "next/router";
import AuthorizationService from "../../services/authorization/AuthorizationService";


export default function CB({code,grant_type})  {
    useEffect( ()=>{
        const getToken = new AuthorizationService()
        getToken.ResolveUser({code,grant_type})
    },[])
    return(
        <div></div>
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