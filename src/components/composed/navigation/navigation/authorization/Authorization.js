import Image from "next/image";

export default function Authorization() {

   const handleGITHUB = () => {
       location.assign('https://api-staging.devbuff.com/oAuth/external/init/github/client/web')
   }
   const handleGITLAB = () => {
       location.assign('https://api-staging.devbuff.com/oAuth/external/init/gitlab/client/web')
   }

    return(
        <div className={'bg-primary-100 flex flex-col p-6 gap-3 rounded-xl'}>
            <span className={'font-sans text-xl opacity-90 font-bold'}>Войти с помощью</span>
            <button onClick={handleGITHUB} className={'bg-primary-400 flex items-center justify-center text-lg p-2 gap-2 text-white rounded-xl'}><Image src={'/images/github__light.png'} width={20} height={20} />
                <span>GITHUB</span>
            </button>
            <button onClick={handleGITLAB} className={'bg-primary-400 flex items-center justify-center text-lg p-2 gap-2 text-white rounded-xl'}><Image src={'/images/gitlab-icon.png'} width={20} height={20} />
                <span>GITLAB</span>
            </button>
            <span className={'text-black text-base opacity-90 italic'}>Авторизируйтесь для возможности просмотра и создания идей</span>
        </div>
    )
}