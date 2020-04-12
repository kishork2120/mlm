import _ from 'lodash';

export default class Splitter {
    private splitLength: number;

    constructor(length: number) {
        this.splitLength = length;
    }

    public split(array: Array<String>): any {
        array = _.shuffle(array);
        return _.chunk(array,this.splitLength);
    }
}