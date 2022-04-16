import Specialists from "./IdeaList/Specialists";
import Tech from "./IdeaList/Tech";
import Languages from "./IdeaList/Languages";

//THIS IS TEST CONTENT

export default function IdeaCard() {
    return(
        <li className={'w-4/5'}>
            <div className={''}>
                <div className={'flex items-center gap-3'}>
                    <div className={'rounded opacity-60'}>UserAvatar</div>
                    <div>
                        <span className={'font-montserratThin text-xs'}>@UserName</span>
                    </div>
                    <div>
                        <span className={'font-montserratThin text-xs'}>21hTimeAgo</span>
                    </div>
                </div>
                <div className={'mt-4 bg-gray-100 p-3 rounded'}>
                    <div className={'flex items-center justify-between'}>
                        <div className={'font-montserratBold text-blue-500 text-xl'}>Title Title Title Title</div>
                        <div className={'rounded-3xl'}>Idea Logo</div>
                    </div>
                    <div className={'break-words mt-2 font-montserratLight opacity-80 text-sm'}>
                        <p>SomeTextSomeTextSomeTextSomeTeakjdhajksdhjkasdhjkashdkahsjkdhaksdhkajshdkjahdjksahkdxtSoasdasdasmeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeTextSomeText</p>
                    </div>
                    <div className={'flex gap-2 mt-4'}>
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
                    </div>
                    <div className={'flex justify-end mt-2'}>
                        <button className={'bg-blue-400 pt-1 pr-4 pb-1 pl-4 rounded text-white font-montserratLight text-xs'}>Подробнее</button>
                    </div>
                </div>
            </div>
        </li>
    )
}