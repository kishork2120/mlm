import Splitter from './splitter';
import names from './dictionaries/names';

export default class PhoneNameArrayGenerator extends Splitter {
    private arrayLimit: number;
    constructor(length: number, limit: number) {
        super(length);
        this.arrayLimit = limit;
    }
    getNameArray() {
        let splicedArray:any = super.split(names).slice(0,this.arrayLimit);
        return splicedArray.map((d:any)=>d.map((d1:any)=>`${d1}-(${d1.toLowerCase()}${Math.ceil(Math.random()*Math.pow(10,2))}@gmail.com)`));
        //${Math.ceil(Math.random()*Math.pow(10,10))}
    }
}