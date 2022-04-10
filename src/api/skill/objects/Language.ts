import Specialization from "./Specialization";

export default interface Language {
    name: string,
    specializations: Array<Specialization>
}
