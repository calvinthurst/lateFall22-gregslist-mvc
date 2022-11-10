import { generateId } from "../Utils/generateId.js"

export class Home {
  constructor(data) {
    this.id = generateId()
    this.homeAddress = data.homeAddress
    this.style = data.style
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bedrooms
    this.sqfeet = data.sqfeet
    this.homeImg = data.homeImg
    this.createdAt = new Date()
  }

  get HomeTemplate() {
    return `
    <div class="col-4 p-4">
          <div class="card">
            <img src="${this.homeImg}}" class="card-img-top"
              alt="${this.style}">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>${this.homeAddress}</span>
                <span>Bedrooms: ${this.bedrooms}</span>
                <span>Bathrooms: ${this.bathrooms}</span>
              </h5>
              <button onclick="app.homesController.setActiveHome('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              See Details
              </button>
            </div>
          </div>
        </div>
    `
  }

  get activeHomeTemplate() {
    return `
    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${this.homeAddress}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <h5>
    ${this.createdAt.toLocaleDateString()}
    </h5>
    <img src="${this.homeImg}" alt="home" class="img-fluid">
    <b>Sqfeet: ${this.sqfeet}</b>
    <p>${this.style}</p>
    <div>Bedrooms: ${this.bedrooms} </div>
    <div>Bathrooms: ${this.bathrooms}</div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
  `
  }

}