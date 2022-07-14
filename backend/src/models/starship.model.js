const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/** Returns a starship schema.
 * Name: Name of the starship.
 * Weight: weight in kg.\
 * Type: Starship type: laucher, manned, no-manned.
 * First launch date: dd/mm/yyyy
 * Fuel used: type of fuel used.
 * Max speed: max speed in km/s
 * Thrust: Boots thrust in MN.
 */

const starshipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["launcher", "manned", "no-manned"],
      required: true,
    },
    launch_date: {
      type: Date,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    max_speed: {
      type: Number,
      required: true,
    },
    thrust: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("starships", starshipSchema);
