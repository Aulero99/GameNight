import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  // NOTE ^ IGNORE ABOVE ^

  // NOTE v CODE GOES HERE v

  players = [
    new Player(
      {
        id: 'player1',
        name: 'John',
        score: 0
      }
    ),
    new Player(
      {
        id: 'player2',
        name: 'Bill',
        score: 0
      }
    )
  ]

  // NOTE ^ CODE GOES HERE ^

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
