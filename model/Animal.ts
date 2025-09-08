export default class Animal {
    public name: string;
    public year: number;
    public specie: string;
    public owner: string;
    
    constructor (name: string, year: number, specie: string, owner: string){
        this.name = name;
        this.year = year;
        this.specie = specie;
        this.owner = owner;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getYear(): number{
        return this.year;
    }

    public setYear(year: number): void{
        this.year = year;
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