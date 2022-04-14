export default interface IdeaChanges {
    name: string
    description: string
    text: string
    specialists: [
        {
            id: string
            count: number
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
    ]
}