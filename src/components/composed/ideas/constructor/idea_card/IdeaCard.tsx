import Specialists from "./IdeaList/Specialists";
import Tech from "./IdeaList/Tech";
import Languages from "./IdeaList/Languages";

//THIS IS TEST CONTENT

export default function IdeaCard() {
    return(
        <li className={'relative flex flex-col border p-5 rounded bg-gray-100'}>
            <div className={'flex items-center justify-between'}>
                <div className={'font-montserratBold text-blue-500 text-xl'}>Title Title Title Title</div>
                <div className={'rounded-3xl'}>Idea Logo</div>
            </div>
            <div className={'flex  flex-col '}>
                <div className={'flex items-center gap-2'}>
                    <div className={'rounded opacity-60'}>UserAvatar</div>
                    <div className={'font-montserratRegular opacity-60'}>Name SecondName</div>
                </div>
                <div>
                    <span className={'font-montserratThin text-xs'}>@UserName</span>
                </div>
            </div>
            <div className={'break-words mt-2 font-montserratLight opacity-80 text-sm'}>
                <p>SomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText</p>
            </div>
            <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                <span>Специалисты</span>
                <Specialists />
            </div>
            <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                <span>Технологии</span>
                <Tech />
            </div>
            <div className={'mt-2 flex flex-col font-montserratBold text-x2s text-gray-400'}>
                <span>Языки программирования</span>
                <Languages />
            </div>
            <div className={'flex justify-end mt-2'}>
                <button className={'bg-blue-400 pt-1 pr-4 pb-1 pl-4 rounded text-white font-montserratLight text-xs'}>Подробнее</button>
            </div>
        </li>
    )
}