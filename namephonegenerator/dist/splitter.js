"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Splitter {
    constructor(length) {
        this.splitLength = length;
    }
    split(array) {
        array = lodash_1.default.shuffle(array);
        return lodash_1.default.chunk(array, this.splitLength);
    }
}
exports.default = Splitter;
//# sourceMappingURL=splitter.js.map