import PhoneNameArrayGenerator from './phoneNameArrayGenerator';

export function getNameSplitArray(length:number,limit:number){
    let obj:any = new PhoneNameArrayGenerator(length,limit);
    return obj.getNameArray();
}