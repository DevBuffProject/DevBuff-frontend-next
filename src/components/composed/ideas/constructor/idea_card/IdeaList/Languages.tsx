import UtilityService from "../../../../../../services/utility/UtilityService";
import {IdeaSpecialist} from "../../../../../../api/idea/objects/IdeaSearchResult";


interface InputParams {
    specialists: Array<IdeaSpecialist>
}

export default function Languages(params: InputParams) {
    const specialists: Array<IdeaSpecialist> = params.specialists

    const languages = specialists.flatMap((specialist) => {
        return (
            specialist.languages.map((language) => {
                return language.name
            })
        );
    })


    return (
        languages.length === 0
        ? null
        :<>
            <span>Языки программирования</span>
            <ul className={'w-36   flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll'}>
                {
                    languages.filter((language, index) => {
                        return languages.indexOf(language) == index;
                    }).map((language, index) => {
                        return (
                            <li key={index}
                                className={`font-montserratRegular flex gap-2 text-black text-xs items-center  rounded-xl`}>
                                <div className={`${UtilityService.setColorLanguage(language)} rounded-3xl w-2 h-2`}/>
                                <span>{language}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}