import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ViewLayout from "../components/layouts/ViewLayout";
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
        <ViewLayout>
            {/*<pre>{JSON.stringify(idea, null, '\t')}</pre>*/}
        </ViewLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...await serverSideTranslations(locale as string, ALL_NAMESPACES),
        },
    };
}