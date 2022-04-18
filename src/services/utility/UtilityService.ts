import SpecialistsType from "./objects/SpecialistsType";


export default class UtilityService {

    public removeDupedItemArray(arr : Array<any>) : Array<any> {
        return  [...new Set(arr)]
    }

    public removeDupedSpecialistObject(arr : Array<SpecialistsType>) : Array<SpecialistsType> {
        console.log(arr)
        const uniq = new Set(arr.map(e => JSON.stringify(e)));
        return  Array.from(uniq).map(e => JSON.parse(e));
    }

}