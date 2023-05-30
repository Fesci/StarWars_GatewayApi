const Film = require("../data");
async function getFilms(req, res) {
  const films = Film.list();
  return res.status(200).send(films);
}

module.exports = getFilms;
