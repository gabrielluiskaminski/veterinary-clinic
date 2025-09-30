"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../db/Database");
const Owner_1 = require("../model/Owner");
const MainScreen_1 = require("../view/MainScreen");
class MainController {
    constructor() {
        this.db = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewOwner() {
        return new Owner_1.default();
    }
}
exports.default = MainController;
