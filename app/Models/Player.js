import { generateId } from "../Utils/generateId.js"


export class Player {
    
    /**
    * @param {{id:string, name:string, score:number}} data
    */
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.score = data.score
    }
  
}