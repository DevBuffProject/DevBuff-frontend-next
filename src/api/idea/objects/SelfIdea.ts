/**
 * Retrospective of self idea
 */
export default interface SelfIdea {
    /**
     * Idea ID
     */
    id: string,

    /**
     * Name of Idea
     */
    name: string,

    /**
     * Short story about idea
     */
    description: string,

    /**
     * Date of publication
     */
    datePublished: Date

    /**
     * Status of moderation verification
     */
    waitingValidation: boolean
}