export default class Starship {
  constructor(type, name, weight) {
    this.type = type;
    this.name = name;
    this.weight = weight;
  }

  get typeShip() {
    return this.type;
  }
  get nameShip() {
    return this.name;
  }

  get weightShip() {
    return this.weight;
  }
  set typeShip(type) {
    return this.type = type;
  }
  set nameShip(name) {
    this.name = name;
  }

  set weightShip(weight) {
    this.weight = weight;
  }

  orbit() {
    pass;
  }

  research() {
    pass;
  }
}