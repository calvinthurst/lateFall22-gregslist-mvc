import { Car } from "./Models/Car.js"
import { Home } from "./Models/Home.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  // NOTE this is for homes 
  /** @type {import('./Models/Home').Home[]} */
  homes = [
    new Home({
      homeAddress: '1423 w Party blvd',
      style: 'ranch',
      bedrooms: 3,
      bathrooms: 2,
      sqfeet: 2000,
      homeImg: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }),
    new Home({
      homeAddress: '145 n Square rd',
      style: 'ranch',
      bedrooms: 5,
      bathrooms: 3,
      sqfeet: 20000,
      homeImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    })
  ]
  /** @type {import('./Models/Home').Home|null} */

  activeHome = null
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
