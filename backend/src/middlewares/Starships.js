 /**
 * Mothersship class creates simple starships objects. 
 * Starship inherits Mothership elements and override some methods
 * @param {String} name Starship name.
 * @param {Number} weight Starship weight in tons.
 * @param {String} type Starship type: laucher, manned, no-manned.
 * @param {Date} date Launch date: dd/mm/yyyy
 * @param {String} fuel Type of fuel used.
 * @param {Number} speed max speed in km/s
 * @param {Number} thrust Boots thrust in MN.
 * @returns {Class}
 */

class Mothership {
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

class Starship extends Mothership {
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
    super.launch(date);
    return (this.date = date);
  }

  thrust(thrust) {
    return (this.thrust = thrust);
  }

  showFeaturesResume(date, thrust) {
    this.launch(date);
    this.thrust(thrust);
    const featureText = `${this.name} was lauched at ${this.date}. The type of this ship is ${this.type} and did use ${this.fuel} as fuel. Its weight is ${this.weight} kg and get a max speed of ${this.maxSpeed} km/s and ${this.thrust} MN.`;
    return featureText;
  }
}

module.exports = { Mothership, Starship };
