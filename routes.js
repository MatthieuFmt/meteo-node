const express = require("express");
const { createData, getData } = require("./controller.js");
const router = express.Router();

router.get("/temperature/:station", (req, res) => {
  getData(req, res);
});

router.post("/temperature", (req, res) => {
  createData(req, res);
});

module.exports = router;
