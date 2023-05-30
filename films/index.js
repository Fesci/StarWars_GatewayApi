const server = require("./src/app");
const port = 8002;
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}/`);
});
