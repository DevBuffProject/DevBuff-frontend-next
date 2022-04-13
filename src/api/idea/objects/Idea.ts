import SimpleUser from "./SimpleUser";

export default interface Idea {
    id: string
    ownerIdea: SimpleUser
    name: string,
    status: string,
    description: string,
    text: string,
    waitingValidation: true,
    specialist: [
        {
            id: string
            count: number,
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
            ],
            acceptedUsers: Array<SimpleUser>
        }
    ],
    localeCode: string
    lastUpdateDate: Date
}