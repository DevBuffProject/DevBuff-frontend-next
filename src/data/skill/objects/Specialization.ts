import Framework from "./Framework";

export default interface Specialization {
    name: string
    //TODO Backend need rename to technologies
    frameworks: Array<Framework>
}