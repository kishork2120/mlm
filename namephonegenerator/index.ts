import PhoneNameArrayGenerator from './phoneNameArrayGenerator';

export function getNameSplitArray(length:number,limit:number,array:Array<any>=[]){
    let obj:any = new PhoneNameArrayGenerator(length,limit,array);
    return obj.getNameArray();
}