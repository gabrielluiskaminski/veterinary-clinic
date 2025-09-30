import Database from "../db/Database";
import Owner from "../model/Owner";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public db: Database = new Database();

    public constructor () {
        new MainScreen(this);
    }

    public getNewOwner () : Owner {
        return new Owner();
    }

    
}
