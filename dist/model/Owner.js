"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Owner extends Person_1.default {
    constructor() {
        super(...arguments);
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    listAllAnimals() {
        return this.animals;
    }
    removeAnimalByName(name) {
        // fazer a logica de remoção de animal pelo nome.
    }
}
exports.default = Owner;
