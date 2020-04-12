"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const splitter_1 = __importDefault(require("./splitter"));
const names_1 = __importDefault(require("./dictionaries/names"));
class PhoneNameArrayGenerator extends splitter_1.default {
    constructor(length, limit) {
        super(length);
        this.arrayLimit = limit;
    }
    getNameArray() {
        let splicedArray = super.split(names_1.default).slice(0, this.arrayLimit);
        return splicedArray.map((d) => d.map((d1) => `${d1}-(${d1.toLowerCase()}${Math.ceil(Math.random() * Math.pow(10, 2))}@gmail.com)`));
        //${Math.ceil(Math.random()*Math.pow(10,10))}
    }
}
exports.default = PhoneNameArrayGenerator;
//# sourceMappingURL=phoneNameArrayGenerator.js.map