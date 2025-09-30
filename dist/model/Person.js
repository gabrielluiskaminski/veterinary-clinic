"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    //  its gona be a class but idk how to do that yet...  public address: string; faz da mesma forma que foi feito com animal para o dono.
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
}
exports.default = Person;
