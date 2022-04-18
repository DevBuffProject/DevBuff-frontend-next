import SpecialistsType from "./objects/SpecialistsType";


export default class UtilityService {

    static removeDupedItemArray(arr : Array<any>) : Array<any> {
        return  [...new Set(arr)]
    }

    static removeDupedSpecialistObject(arr : Array<SpecialistsType>) : Array<SpecialistsType> {
        const uniq = new Set(arr.map(e => JSON.stringify(e)));
        return  Array.from(uniq).map(e => JSON.parse(e));
    }

}