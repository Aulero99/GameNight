import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { generateId } from "../Utils/generateId.js";

function drawPlayers() {
    let template = ''

    appState.players.forEach(p => {
        template += /*html*/`
            <div id="${p.id}">
                <h5>${p.name}</h5>
                <p>${p.score}</p>
            </div>
        `
    })

    document.getElementById('app').innerHTML = template
}

export class PlayersController {
    //NOTE Builds the controller
    constructor(){
        drawPlayers()
    }

    addPlayer(){
        console.log('The addPlayer function is being called');
        try{
            window.event.preventDefault()
            const form = window.event.target
            let name = form.name.value

            console.log(name);
            appState.players.push(new Player({id:generateId(), name:name, score:0}))
            
            console.log(appState.players);
            form.reset()
        } catch(e) {
            console.error('[addPlayer]', error)
        }
        appState.players.push()
        drawPlayers()
    }
}