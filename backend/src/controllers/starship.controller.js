const starshipCtrl = {};
const starshipModel = require("../models/starship.model");
const { generalMessage } = require("../helpers/messages.helper");
const { Starship } = require("../middlewares/Starships");

starshipCtrl.listStarships = async (req, res) => {
  // Returns all starships in database.
  try {
    const starships = await starshipModel.find({});
    generalMessage(res, 200, starships, ok, "Fleet found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

starshipCtrl.findStarshipById = async (req, res) => {
  // Returns a starship by ID and its data.
  try {
    const { id } = req.params;
    const starship = await starshipModel.findById({ _id: id });
    generalMessage(res, 200, starships, ok, "Starship found.");
  } catch (error) {}
  generalMessage(res, 500, "", false, error.message);
};

starshipCtrl.addStarship = async (req, res) => {
  /** Adds a new starship to database. */
  try {
    const { name, weight, type, fuel, speed, date, thrust } = req.body;
    const newStarship = new Starship(name, weight, type, fuel, max_speed);
    const saveStarship = new starshipModel({
      name: newStarship.name,
      weight: newStarship.weight,
      type: newStarship.type,
      fuel: newStarship.fuel,
      max_speed: newStarship.speed,
      launch_date: newStarship.launch(date),
      thrust: newStarship.thrust(thrust),
    });
    await newProduct.save();
    generalMessage(
      res,
      201,
      saveStarship,
      true,
      `Starship with name ${name} was successfully created.`
    );
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = starshipCtrl;
