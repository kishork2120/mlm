"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phoneNameArrayGenerator_1 = __importDefault(require("./phoneNameArrayGenerator"));
function getNameSplitArray(length, limit) {
    let obj = new phoneNameArrayGenerator_1.default(length, limit);
    return obj.getNameArray();
}
exports.getNameSplitArray = getNameSplitArray;
//# sourceMappingURL=index.js.map