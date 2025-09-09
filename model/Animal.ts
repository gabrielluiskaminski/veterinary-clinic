export default class Animal {
    public name: string;
    public age: number;
    public specie: string;
    public owner: string;
    
    constructor (name: string, age: number, specie: string, owner: string){
        this.name = name;
        this.age = age;
        this.specie = specie;
        this.owner = owner;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getAge(): number{
        return this.age;
    }

    public setAge(age: number): void{
        this.age = age;
    }

    public getSpecie(): string{
        return this.specie;
    }

    public setSpecie(specie: string): void{
        this.specie = specie;
    }

    public getOwner(): string{
        return this.owner;
    }

    public setOwner(owner: string): void{
        this.owner = owner;
    }
}