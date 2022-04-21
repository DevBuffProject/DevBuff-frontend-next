import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {ALL_NAMESPACES} from "../config/I18nConfiguration";

export default function Home() {
    //Demo usage, is not a preferred code!
    // const ideaService = injector.get(IdeaService)
    // const [idea, setIdea] = useState({})
    // useEffect(() => {
    //     ideaService.getIdeasByParams().then(idea => {
    //         setIdea(idea)
    //     })
    // }, [IdeaService])


    return (
        <div className={'flex gap-5 items-center justify-center bg-blue-50 w-screen h-screen'}>
            <span className={'font-montserratThin text-md'}>This is start page of</span>
            <span className={'font-montserratBold text-x4l opacity-80'}>DEVBUFF_</span>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...await serverSideTranslations(locale as string, ALL_NAMESPACES),
        },
    };
}