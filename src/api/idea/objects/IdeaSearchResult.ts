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
    ownerIdea: {
        id: string,
        userName: string,
        firstName: string,
        lastName: string
    }
    name: string
    description: string
    requirements: [
        {
            name: string
            languages: [
                {
                    name: string
                    frameworks: [
                        {
                            name: string
                        }
                    ]
                }
            ]
        }
    ],
    updateDate: Date
    publishDate: Date
}