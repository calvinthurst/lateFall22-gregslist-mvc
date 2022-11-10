import { appState } from "../AppState.js"

class HomesServices {
  setActiveHome(homeId) {
    let foundHome = appState.homes.find(h => h.id == homeId)
    console.log(foundHome)
    appState.activeHome = foundHome
  }
}
export const homesServices = new HomesServices()