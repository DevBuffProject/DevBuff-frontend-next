import SimpleUser from "./SimpleUser";

export default interface IdeaSearchResult {
    /**
     * Count ideas per one page
     */
    perPage: number,
    /**
     * Result of search
     */
    ideas: Array<IdeaView>
}


/**
 * Retrospective of idea, for basic views
 */
export interface IdeaView {

    id: string
    /**
     * Short data about owner of Idea
     */
    ownerIdea: SimpleUser
    name: string
    description: string
    requirements: Array<IdeaSpecialist>,
    updateDate: Date
    publishDate: Date
}

export interface IdeaSpecialist {
    name: string
    languages: Array<IdeaLanguage>
}

export interface IdeaLanguage {
    name: string
    frameworks: Array<IdeaFramework>
}

export interface IdeaFramework {
    name: string
}