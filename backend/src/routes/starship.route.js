const { Router } = require("express");
const route = Router();
const starshipCtrl = require("../controllers/starship.controller");

route.get("/", starshipCtrl.listStarships);
route.get("/:id", starshipCtrl.findStarshipById);
route.post("/", starshipCtrl.addStarship);
route.put("/:id", starshipCtrl.updateStarship);
route.delete("/:id", starshipCtrl.deleteStarship);

module.exports = route;
