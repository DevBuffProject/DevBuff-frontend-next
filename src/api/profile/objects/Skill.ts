

export  default interface Skill {
    name : string
    levelKnowledge : string
    specializations : Array<Specialization>
}


export interface Specialization {
    name : string
    frameworks : Array<Framework>
}

export interface Framework {
    name : string
    levelKnowledge : string
}