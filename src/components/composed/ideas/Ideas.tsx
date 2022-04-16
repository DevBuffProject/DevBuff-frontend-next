import IdeaCard from "./constructor/idea_card/IdeaCard";

//THIS IS TEST CONTENT

export default function Ideas () {
    return(
        <ul className={'flex flex-col gap-2  p-2'}>
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
            <IdeaCard />
        </ul>
    )
}