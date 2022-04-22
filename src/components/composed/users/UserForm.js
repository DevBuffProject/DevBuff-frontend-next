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
        <div className={'flex gap-1'}>
            <button onClick={handleLogOut} className={' flex items-center pl-2 pr-2 bg-red-500 p-0 m-0 rounded-full text-white text-x4l'}><span className={'font-montserratRegular text-base'}>Logout </span>&times;</button>
        </div>
    )
}