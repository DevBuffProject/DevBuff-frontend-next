import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export interface Length {
    ideasLength : number
}

export default function PageHandler(params : Length) {

    const router = useRouter()

    const [opacityBack,setOpacityBack] = useState('opacity-100')
    const [opacityForward,setOpacityForward] = useState('opacity-100')

    useEffect(()=>{
        const pageBack :number = parseInt(router.query.page as string)
        if (pageBack === 1) {
            setOpacityBack('opacity-40')
        } else {
            setOpacityBack('opacity-100')
        }
        if (params.ideasLength < 10) {
            setOpacityForward('opacity-40')
        } else {
            setOpacityForward('opacity-100')
        }
    })

    const handleBack = () => {
        const pageBack :number = parseInt(router.query.page as string)
        if (pageBack === 1) return;

        router.push({
            pathname : '/explore/[page]',
            query : { page : pageBack - 1 }
        })
    }

    const handleForward = () => {
        const pageForward :number = parseInt(router.query.page as string)
        if (params.ideasLength < 10) return;
        router.push({
            pathname : '/explore/[page]',
            query : { page : pageForward + 1 }
        })
    }

    return(
        <div className={'xl:w-4/5 w-auto mb-2 mt-2 flex flex-wrap justify-center gap-5 items-center'}>
            <button onClick={handleBack} className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex  ${opacityBack}`}>&larr; Назад</button>
            <button onClick={handleForward} className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex  ${opacityForward}`}>Вперед &rarr;</button>
        </div>
    )
}