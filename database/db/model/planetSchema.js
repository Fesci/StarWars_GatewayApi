const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String }],
  films: [{ type: String, ref: "Film" }],
});
planetSchema.statics.list = async function () {
  return await this.find().populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};
planetSchema.statics.get = async function (id) {
  return await this.findById(id).populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};
planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};
module.exports = planetSchema;
