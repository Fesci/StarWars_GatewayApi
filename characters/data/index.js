const axios = require("axios");
module.exports = {
  list: async () => {
    const response = await axios.get("http://localhost:8001/characters");
    return response;
  },
};
