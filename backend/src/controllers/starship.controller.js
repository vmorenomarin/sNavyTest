const starshipCtrl = {};
const starshipModel = require("../models/starship.model");
const { generalMessage } = require("../helpers/messages.helper");
const { Starship } = require("../middlewares/Starships");

starshipCtrl.listStarships = async (req, res) => {
  // Returns all starships in database.
  try {
    const starships = await starshipModel.find({});
    generalMessage(res, 200, starships, true, "Fleet found.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

starshipCtrl.findStarshipById = async (req, res) => {
  // Returns a starship by ID and its data.
  try {
    const { id } = req.params;
    const starship = await starshipModel.findById({ _id: id });
    if (!starship) {
      return generalMessage(res, 404, "", false, "Starship not found.");
    }
    generalMessage(res, 200, starships, ok, "Starship found.");
  } catch (error) {}
  generalMessage(res, 500, "", false, error.message);
};

starshipCtrl.addStarship = async (req, res) => {
  // Add a new starship to database.
  try {
    const { name, weight, type, fuel, speed, date, thrust } = req.body;
    const starship = await starshipModel.findOne({ name });
    if (starship) {
      return generalMessage(res, 409, "", false, "Starship already exists.");
    }
    const newStarship = new Starship(name, weight, type, fuel, speed);
    const saveStarship = new starshipModel({
      name: newStarship.name,
      weight: newStarship.weight,
      type: newStarship.type,
      fuel: newStarship.fuel,
      max_speed: newStarship.maxSpeed,
      launch_date: newStarship.launch(date),
      thrust: newStarship.thrust(thrust),
    });
    console.log(saveStarship.name);
    await saveStarship.save();
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

starshipCtrl.updateStarship = async (req, res) => {
  // Update a new starship to database using an url parameter.
  try {
    const { id } = req.params;
    const starship = await starshipModel.findOne({ _id: id });
    if (!starship) {
      return generalMessage(res, 404, "", false, "Starship not found.");
    }
    const name = req.body.name || starship.name;
    const weight = req.body.weight || starship.weight;
    const type = req.body.type || starship.type;
    const date = req.body.date || starship.launch_date;
    const max_speed = req.body.speed || starship.max_speed;
    const fuel = req.body.fuel || starship.fuel;
    const thrust = req.body.thrust || starship.thrust;
    const updateStarship = new Starship(name, weight, type, fuel, max_speed);
    const updatedStarship = {
      name: updateStarship.name,
      weight: updateStarship.weight,
      type: updateStarship.type,
      fuel: updateStarship.fuel,
      max_speed: updateStarship.speed,
      launch_date: updateStarship.launch(date),
      thrust: updateStarship.thrust(thrust),
    };
    await starship.updateOne(updatedStarship);
    generalMessage(res, 200, updatedStarship, true, "Starship updated.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

starshipCtrl.deleteStarship = async (req, res) => {
  // Delete starship from database using an url parameter.

  try {
    const { id } = req.params;
    const starship = await starshipModel.findOne({ _id: id });
    if (!starship) {
      return generalMessage(res, 404, "", false, "Starship not found.");
    }
    await starshipModel.deleteOne({ _id: id });
    generalMessage(res, 200, "", true, "Starship deleted.");
  } catch (error) {
    generalMessage(res, 500, "", false, error.message);
  }
};

module.exports = starshipCtrl;
