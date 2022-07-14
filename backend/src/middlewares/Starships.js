export class Mothership {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  get nameShip() {
    return this.name;
  }

  get weightShip() {
    return this.weight;
  }

  set nameShip(name) {
    this.name = name;
  }

  set weightShip(weight) {
    this.weight = weight;
  }

  launch(date) {
    console.log(`It was launched in ${date}.`);
  }
}

export class Starship extends Mothership {
  constructor(name, weight, type, fuel, speed) {
    super(name, weight);
    this.type = type;
    this.fuel = fuel;
    this.maxSpeed = speed;
  }

  maxSpeedGetted() {
    return `Max speed getted ${this.maxSpeed}.`;
  }

  launch(date) {
    super.launch();
    return (this.date = date);
  }

  thrust(thrust) {
    return (this.thrust = thrust);
  }

  showFeaturesResume(date) {
    this.launch(date);
    const featureText = `${this.name} was lauched at ${this.date}. The type of this ship is ${this.type} and did use ${this.fuel} as fuel. Its weight is ${this.weight} kg and get a max speed of ${this.maxSpeed} km/s and ${this.thrust} MN.`;
    return featureText;
  }
}
