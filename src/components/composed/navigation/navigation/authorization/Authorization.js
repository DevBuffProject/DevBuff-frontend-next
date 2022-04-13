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
            <div className={' w-fit flex  justify-center items-center opacity-100  group-hover:opacity-100 transition ease-in-out duration-500'}>
                <svg  width="60" height="60" viewBox="0 0 45 60" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#paint0_linear)" d="M42.074 22.8878L8.60192 37.4049C7.58762 37.7171 6.62208 37.5903 5.7053 37.0244C4.78853 36.4586 4.1936 35.6488 3.92052 34.5952C3.64744 33.5415 3.77422 32.5366 4.30088 31.5805C4.82754 30.6244 5.59802 29.9903 6.61233 29.6781L40.0844 15.161C41.1377 14.8878 42.113 15.0244 43.0103 15.5708C43.9075 16.1171 44.5024 16.9269 44.795 18C45.0876 19.0732 44.9608 20.0878 44.4147 21.0439C43.8685 22 43.0883 22.6147 42.074 22.8878ZM38.3288 11.6488L4.8568 26.1659C3.84249 26.4781 2.87695 26.3513 1.96018 25.7854C1.0434 25.2196 0.448476 24.4098 0.175394 23.3561C-0.0976882 22.3025 0.0290998 21.2976 0.555758 20.3415C1.08242 19.3854 1.8529 18.7708 2.8672 18.4976L36.3392 3.92199C37.3926 3.64882 38.3679 3.7854 39.2651 4.33175C40.1624 4.87809 40.7573 5.68784 41.0499 6.76101C41.3425 7.83419 41.2157 8.84882 40.6695 9.80492C40.1234 10.761 39.3431 11.3756 38.3288 11.6488ZM17.7307 7.90248L8.60192 11.1805C7.58762 11.4927 6.62208 11.3756 5.7053 10.8293C4.78853 10.283 4.1936 9.47321 3.92052 8.40004C3.64744 7.32687 3.77422 6.31223 4.30088 5.35614C4.82754 4.40004 5.59802 3.7854 6.61233 3.51223L15.7996 0.175648C16.8139 -0.0975229 17.7794 0.0390625 18.6962 0.585404C19.613 1.13175 20.2079 1.9415 20.481 3.01467C20.7541 4.08784 20.6273 5.10248 20.1006 6.05858C19.574 7.01467 18.784 7.62931 17.7307 7.90248ZM16.5018 37.9317C16.8919 37.5805 17.3405 37.3269 17.8477 37.1708L36.3392 30.1464C37.3926 29.8732 38.3679 30.0098 39.2651 30.5561C40.1624 31.1025 40.7573 31.9122 41.0499 32.9854C41.3425 34.0586 41.2157 35.0732 40.6695 36.0293C40.1234 36.9854 39.3431 37.6 38.3288 37.8732L22.5291 43.9025C22.4901 44.4098 22.4706 44.7805 22.4706 45.0147H26.2157C27.269 45.0147 28.1565 45.3854 28.8783 46.1269C29.6 46.8683 29.9608 47.7561 29.9608 48.7903C29.9608 49.8244 29.6 50.7025 28.8783 51.4244C28.1565 52.1464 27.269 52.5074 26.2157 52.5074H18.7255C18.4914 52.5074 18.2573 52.4878 18.0233 52.4488C16.1117 52.2537 14.5024 51.4439 13.1956 50.0196C11.8887 48.5952 11.2352 46.9269 11.2352 45.0147C11.2352 43.3756 11.7229 41.9025 12.6982 40.5952C13.6734 39.2878 14.9413 38.4 16.5018 37.9317ZM22.4706 60C20.403 60 18.6377 59.6391 17.1747 58.9171C15.7118 58.1952 14.9803 57.3074 14.9803 56.2537H29.9608C29.9608 57.3074 29.2294 58.1952 27.7664 58.9171C26.3035 59.6391 24.5382 60 22.4706 60Z" />
                    <linearGradient id="paint0_linear" gradientTransform="rotate(90)">
                        <stop className={'group-hover:animate-logoStop'} stopColor="lightgray"/>
                        <stop className={'group-hover:animate-logo'} offset="1" stopColor="lightgray"/>
                    </linearGradient>
                </svg>
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