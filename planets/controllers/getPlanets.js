const Planet = require("../data");
async function getPlanets(req, res) {
  const planets = await Planet.list();
  return res.status(200).json(planets);
}
module.exports = getPlanets;
