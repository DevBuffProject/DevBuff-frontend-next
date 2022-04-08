import ViewLayout from "../../components/layouts/ViewLayout";
import {useEffect, useState} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection.ts";

export default function Home() {
    // State initialization

    const [user,setUser] = useState()
    const [token,setToken] = useState()
    //

    const service = injector.get(AuthorizationService)


    useEffect(()=>{
        setToken(localStorage.getItem('token'))
        service.SetUser()
            .then(result=>{
                setUser(result)
            })
    },[])
    return(
        <ViewLayout>

        </ViewLayout>
    )
}