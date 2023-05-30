const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/env");

const conn = mongoose.createConnection(MONGODB_URI);

module.exports = {
  Character: conn.model("Character", require("../db/model/characterSchema")),
  Film: conn.model("Film", require("../db/model/filmSchema")),
  Planet: conn.model("Planet", require("../db/model/planetSchema")),
};
