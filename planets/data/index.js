const axios = require("axios");
module.exports = {
  list: async () => {
    const response = axios.get("http://localhost:8003/planets");
    return response;
  },
};
