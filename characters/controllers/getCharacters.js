const Character = require("../data");
const { response } = require("../utils");
function getCharacters(req, res) {
  const characters = Character.list();
  response(res, 201, characters);
}

module.exports = getCharacters;
