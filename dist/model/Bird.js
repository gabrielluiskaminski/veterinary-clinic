"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Bird extends Animal_1.default {
    constructor(name, age, specie, owner) {
        super(name, age, specie, owner);
    }
}
exports.default = Bird;
