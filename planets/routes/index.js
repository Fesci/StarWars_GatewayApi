const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/planets", controllers.getPlanets);
module.exports = router;
