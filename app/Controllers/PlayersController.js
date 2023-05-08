import { appState } from "../AppState.js";

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
        console.log('Hello World')
        drawPlayers()
    }
}