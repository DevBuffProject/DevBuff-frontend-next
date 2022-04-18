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
        <ul className={'w-36  list-disc flex flex-col  gap-2 mt-1 p-4 rounded bg-white h-24 overflow-y-scroll'}>
            {
                languages.filter((language, index) => {
                    return languages.indexOf(language) == index;
                }).map((language, index) => {
                    return (
                        <li key={index}
                            className={'font-montserratRegular text-black text-xs  rounded-xl'}>
                            <span>{language}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}