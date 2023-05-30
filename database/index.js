const express = require("express");
const PORT = 8005;
const server = express();

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

module.exports = server;
