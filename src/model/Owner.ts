import Animal from "./Animal";
import Person from "./Person";

export default class Owner extends Person{
  private animals: Animal[] = [];


  public addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  public listAllAnimals(): Animal[] {
    return this.animals;
  }

  public removeAnimalByName(name: string) {
    // fazer a logica de remoção de animal pelo nome.
  }
}
