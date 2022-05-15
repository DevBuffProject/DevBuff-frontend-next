import {useEffect, useState} from "react";

interface PageHandlerProperties {
    /**
     * Current page
     */
    currentPage: number
    /**
     * Next page is exists?
     */
    hasNext: boolean,

    /**
     * Callback for handle a new page.
     */
    onPageChanged: Function
}


export default function PagePicker(properties: PageHandlerProperties) {


    const [opacityBack, setOpacityBack] = useState('opacity-100')
    const [opacityForward, setOpacityForward] = useState('opacity-100')

    useEffect(() => {
        if (properties.currentPage === 1) {
            setOpacityBack('opacity-40')
        } else {
            setOpacityBack('opacity-100')
        }
        if (!properties.hasNext) {
            setOpacityForward('opacity-40')
        } else {
            setOpacityForward('opacity-100')
        }
    })


    const handleBack = () => {
        if (properties.currentPage === 1) return;

        properties.onPageChanged(properties.currentPage - 1)
    }

    const handleForward = () => {
        if (!properties.hasNext) return;

        properties.onPageChanged(properties.currentPage + 1)
    }

    return (
        <div className={'xl:w-4/5 w-auto mb-2 mt-2 flex flex-wrap justify-center gap-5 items-center'}>
            <button onClick={handleBack}
                    className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex  ${opacityBack}`}>&larr; Назад
            </button>
            <button onClick={handleForward}
                    className={`border-0 w-24 flex items-center justify-center bg-blue-400 text-white p-2 rounded flex  ${opacityForward}`}>Вперед &rarr;</button>
        </div>
    )

}