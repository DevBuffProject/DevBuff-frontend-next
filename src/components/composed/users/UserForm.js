import {injector} from "../../../config/DependencyInjection";
import AuthorizationService from "../../../services/authorization/AuthorizationService";
import {useRouter} from "next/router";



export default function UserForm () {
    const router = useRouter();
    const service = injector.get(AuthorizationService)
    const handleLogOut  = () => {
        service.logOut()
        router.push('/')
    }

    return(
        <div>
            <button onClick={handleLogOut} className={'bg-red-500 p-2 rounded text-white text-xs'}>Logout</button>

        </div>
    )
}