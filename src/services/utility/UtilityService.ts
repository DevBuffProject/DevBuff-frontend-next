


export default class UtilityService {

    public removeDupedItemArray(arr : Array<any>) : Array<any> {
        return  [...new Set(arr)]
    }

    public removeDupedItemObject(arr : Array<any>) : Array<any> {
        const uniq = new Set(arr.map(e => JSON.stringify(e)));
        return  Array.from(uniq).map(e => JSON.parse(e));
    }

}