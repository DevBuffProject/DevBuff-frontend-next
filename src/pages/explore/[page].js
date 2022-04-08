import ViewLayout from "../../components/layouts/ViewLayout";
import {useEffect, useState} from "react";
import AuthorizationService from "../../services/authorization/AuthorizationService";

export default function Home() {
    // State initialization

    const [user,setUser] = useState()
    const [token,setToken] = useState()
    //

    useEffect(()=>{
        setToken(localStorage.getItem('token'))
        const user = new AuthorizationService()
        user.SetUser()
            .then(result=>{
                setUser(result)
            })
    },[])
    return(
        <ViewLayout user={user} token={token}>

        </ViewLayout>
    )
}