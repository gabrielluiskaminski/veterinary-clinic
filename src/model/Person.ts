export default class Person {
  public name!: string;
  public age!: number;
  //  its gona be a class but idk how to do that yet...  public address: string; faz da mesma forma que foi feito com animal para o dono.


  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}
