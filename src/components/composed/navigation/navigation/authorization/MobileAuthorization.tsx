import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";


import Image from "next/image";
import {connect} from "react-redux";
import {AuthStatus} from "../../../../../redux/slices/AuthSlice";

export  function MobileAuthorization (status:AuthStatus) {
    const service = injector.get(AuthorizationService);
    const isAuthorized = status.auth.isAuthorized;

    const handleGITHUB = () => {
        service.authorizeViaGitHab()
    }
    const handleGITLAB = () => {
        service.authorizeViaGitLab()
    }
    return (
        <div>
            {
                isAuthorized
                ? null
                : <div className={'flex'}>
                        <div className={'w-full flex flex-row items-center gap-2 mt-2'}>
                            <button onClick={handleGITHUB} className={'w-full flex items-center justify-center p-1 gap-2 border  rounded bg-black backdrop-blur text-white font-montserratBold hover:text-gray-300 transition ease-in-out duration-500'}>
                                <Image src={'/icons/github.svg'} width={20} height={20} />
                                <span>GITHUB</span>
                            </button>
                            <button onClick={handleGITLAB} className={'w-full flex items-center justify-center p-1 gap-2 border  rounded bg-white backdrop-blur text-black font-montserratBold hover:text-gray-300 transition ease-in-out duration-500'}>
                                <Image src={'/icons/gitlab.svg'} width={20} height={20} />
                                <span>GITLAB</span>
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default connect((state) => state, null)(MobileAuthorization)