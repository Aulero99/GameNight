import { generateId } from "../Utils/generateId"


export class Player {
    
    /**
    * @param {{id:string, name:string, score:number}} data
    */
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.score = data.number
    }
  
}