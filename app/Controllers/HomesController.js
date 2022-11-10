import { appState } from "../AppState.js";
import { homesServices } from "../Services/HomesServices.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHomes() {
  let template = ''
  appState.homes.forEach(h => template += h.HomeTemplate)
  setHTML('listings', template)
}

function _drawActiveHome() {
  setHTML('details', appState.activeHome.activeHomeTemplate)
}



export class HomesController {
  constructor() {
    console.log('hey');
    appState.on('activeHome', _drawActiveHome)
    _drawHomes()
  }

  setActiveHome(homeId) {
    homesServices.setActiveHome(homeId)
  }
}