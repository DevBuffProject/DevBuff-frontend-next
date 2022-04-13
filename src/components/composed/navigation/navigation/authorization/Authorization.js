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
        <div className={'w-full  flex flex-col justify-center items-center group  m-0 p-2  ml-1 cursor-pointer border rounded-xl'}>
            <div className={' w-fit flex  justify-center items-center opacity-50 group-hover:animate-bouncing group-hover:opacity-100 transition ease-in-out duration-500'}>
                <Image src={'/images/lamp.png'} width={80} height={80} />
            </div>
            <div className={'text-center'}>
                <span className={'text-base text-blue-400 font-montserratBold '}>Создавайте, смотрите <span className={'text-black text-base font-montserratLight opacity-60'}>учавствуйте в идеях</span></span>
            </div>
            <div className={'w-full flex flex-col items-center gap-2 mt-2'}>
                <button onClick={handleGITHUB} className={'w-full flex items-center justify-center p-1 gap-2 border  rounded bg-black backdrop-blur text-white font-montserratBold hover:text-gray-300 transition ease-in-out duration-500'}>
                    <Image src={'/icons/github.svg'} width={20} height={20} />
                    <span>GITHUB</span>
                </button>
                <button onClick={handleGITLAB} className={'w-full flex items-center justify-center p-1 gap-2 border  rounded bg-white backdrop-blur text-black font-montserratBold hover:text-gray-300 transition ease-in-out duration-500'}>
                    <Image src={'/icons/gitlab.svg'} width={20} height={20} />
                    <span>GITLAB</span>
                </button>
            </div>
            <div className={'text-center mt-2 leading-none'}>
                <span className={'opacity-60 text-xxs font-montserratLight'}><span className={'font-montserratBold opacity-80 animate-colorfull'}>Авторизируйтесь</span> что бы получить весь функционал приложения</span>
            </div>
        </div>
    )
}