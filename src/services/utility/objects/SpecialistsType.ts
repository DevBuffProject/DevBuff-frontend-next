

export interface Tech {
    name : string | undefined
}

export interface Langs {
    name : string | undefined
    technologies : Array<Tech>
}

export default interface SpecialistsType {
    name : string,
    languages : Array<Langs>
}