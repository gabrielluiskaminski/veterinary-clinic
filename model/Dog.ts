import Animal from "./Animal";

export default class Dog extends Animal {
 
    constructor(name: string, age: number, specie: string, owner: string) {
        super (name, age, specie, owner);
    }
}