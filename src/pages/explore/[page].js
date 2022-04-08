import ViewLayout from "../../components/layouts/ViewLayout";
import {useEffect} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";
import {injector} from "../../config/DependencyInjection.ts";

export default function Home() {

    useEffect(()=>{
        //TODO а нужен ли тут это?
        injector.get(AuthorizationService)
    },[])
    return(
        <ViewLayout>
        </ViewLayout>
    )
}