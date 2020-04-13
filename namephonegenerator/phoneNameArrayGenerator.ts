import Splitter from './splitter';
import names from './dictionaries/names';

export default class PhoneNameArrayGenerator extends Splitter {
    private arrayLimit: number;
    private arrayInput:Array<any>;
    constructor(length: number, limit: number,array:Array<any>) {
        super(length);
        this.arrayLimit = limit;
        this.arrayInput = array;
    }
    getNameArray() {
        if(this.arrayInput && this.arrayInput.length){
            let splicedArray:any = super.split(this.arrayInput).slice(0,this.arrayLimit);
            return splicedArray.map((d:any)=>d.map((d1:any)=>`${d1}`));
        }else{
            let splicedArray:any = super.split(names).slice(0,this.arrayLimit);
            return splicedArray.map((d:any)=>d.map((d1:any)=>`${d1}-(${d1.toLowerCase()}${Math.ceil(Math.random()*Math.pow(10,2))}@gmail.com)`));
        }
    }
}