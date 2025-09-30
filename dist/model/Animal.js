"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, age, specie, owner) {
        this.name = name;
        this.age = age;
        this.specie = specie;
        this.owner = owner;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getSpecie() {
        return this.specie;
    }
    setSpecie(specie) {
        this.specie = specie;
    }
    getOwner() {
        return this.owner;
    }
    setOwner(owner) {
        this.owner = owner;
    }
}
exports.default = Animal;
