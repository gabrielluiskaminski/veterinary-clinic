import PromptSync = require("prompt-sync");
import MainController from "../controller/MainController";
import Owner from "../model/Owner";

export default class MainScreen {
  private mainController: MainController;
  private prompt = PromptSync();

  constructor(mainController: MainController) {
    this.mainController = mainController;
    this.mainMenu();
  }

  private mainMenu(): void {
    let continues: boolean = true;

    while (continues) {
      let choice = parseInt(
        this.prompt(
          "Escolha:\n 1 - Para cadastro\n 2 - Para editar\n 3 - Para consulta\n 4 - Para sair"
        )
      );
      switch (choice) {
        case 1:
          this.menuRegister();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          continues = false;
          break;
        default:
          console.log("Digite um valor válido!");
          break;
      }
    }
  }

  private menuRegister(): void {
    let continues: boolean = true;

    while (continues) {
      let choice = parseInt(
        this.prompt(
          "Escolha:\n 1 - Para proprietario\n 2 - Para animal\n 3 - Para veterinario\n 4 - Para sair"
        )
      );
      switch (choice) {
        case 1:
          let owner: Owner = this.mainController.getNewOwner();
          owner.setName(this.prompt("Digite o nome do proprietario:"));
          owner.setAge(
            parseInt(this.prompt("Digite a idade do proprietario:"))
          );
          this.mainController.db.ownerTable.push(owner);
          console.log(this.mainController.db.ownerTable);
          break;
        case 2:
          //passo 1 = apresentar a lsita de proprietarios
          //pegar as info de animal
          // criar novo aniammal
          //armazenar animal
          break;
        case 3:
          break;
        case 4:
          continues = false;
          break;
        default:
          console.log("Digite um valor válido!");
          break;
      }
    }
  }
}
