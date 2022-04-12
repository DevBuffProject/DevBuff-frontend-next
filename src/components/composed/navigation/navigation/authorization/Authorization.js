import Image from "next/image";
import {injector} from "../../../../../config/DependencyInjection";
import AuthorizationService from "../../../../../services/authorization/AuthorizationService";

export default function Authorization() {
    const service = injector.get(AuthorizationService)

   const handleGITHUB = () => {
       service.authorizeViaGitHab()
   }
   const handleGITLAB = () => {
       service.authorizeViaGitLab()
   }

    return(
        <div className={'absolute w-full  bottom-0  left-0 cursor-pointer bg-blue-500'}>
            <div className={'w-full text-center font-montserratRegular bg-blue-300 text-white'}>
                Войти с помощью
            </div>
            <button onClick={handleGITHUB} className={'w-1/2 inline   text-white border-r group '}>
                        <span className={'flex justify-center items-center group-hover:rotate-180 transition ease-in-out duration-500'}>
                            <Image src={'/icons/github.svg'} width={20} height={20} />
                        </span>
            </button>
            <button onClick={handleGITLAB} className={'w-1/2 h-fit inline  text-white group'}>
                    <span className={'flex justify-center items-center translate-y-1 group-hover:rotate-180 transition ease-in-out duration-500'}>
                        <Image src={'/icons/gitlab.svg'} width={30} height={30} />
                    </span>
            </button>
        </div>
    )
}