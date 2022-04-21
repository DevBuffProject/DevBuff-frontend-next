import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export interface Length {
    ideasLength : number
}

export default function PageHandler(params : Length) {

    const router = useRouter()

    const [opacityBack,setOpacityBack] = useState('opacity-100')
    const [opacityForward,setOpacityForward] = useState('opacity-100')
    //  Как то так

    useEffect(()=>{
        let pageBack :any = router.query.page
        if (parseInt(pageBack) === 1) {
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
        let pageBack :any = router.query.page
        if (parseInt(pageBack) === 1) return;

        router.push({
            pathname : '/explore/[page]',
            query : { page : parseInt(pageBack) - 1 }
        })
    }

    const handleForward = () => {
        let pageForward :any = router.query.page
        if (params.ideasLength < 10) return;
        router.push({
            pathname : '/explore/[page]',
            query : { page : parseInt(pageForward) + 1 }
        })
    }

    return(
        <div className={'w-4/5 mb-2 mt-2 flex flex-wrap justify-center gap-5 items-center'}>
            <button onClick={handleBack} className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex items-center ${opacityBack}`}>&larr; Назад</button>
            <button onClick={handleForward} className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex items-center ${opacityForward}`}>Вперед &rarr;</button>
        </div>
    )
}