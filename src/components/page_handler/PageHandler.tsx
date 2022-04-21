import {useRouter} from "next/router";

export interface Length {
    ideasLength : number
}

export default function PageHandler(params : Length) {

    const router = useRouter()

    //  Как то так

    const handleBack = () => {
        let pageBack :any = router.query.page
        console.log(pageBack)
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
        <div className={'w-4/5 mb-2 mt-2 flex flex-wrap justify-between items-center'}>
            <button onClick={handleBack} className={'border-0 flex items-center'}>&larr;Назад</button>
            <button onClick={handleForward} className={'border-0 flex items-center'}>Вперед&rarr;</button>
        </div>
    )
}