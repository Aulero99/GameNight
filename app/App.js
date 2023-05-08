// import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayersController } from "./Controllers/PlayersController"

class App {
  // valuesController = new ValuesController();
  playersController = new PlayersController()
}

window["app"] = new App();
