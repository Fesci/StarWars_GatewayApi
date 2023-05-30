const { Router } = require("express");
const models = require("../db");
const router = Router();

router.get("/:model", async (req, res) => {
  const { model } = req.params;
  const response = await models[model].list();
  res.status(200).send(response);
});

module.exports = router;
