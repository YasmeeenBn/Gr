const express = require("express");
const CityController = require("../controllers/cityController");

const router = express.Router();

router.get("/metro/:keyword/", CityController.getCities);
//router.get("/outre/:keyword/", CityController.getCitiesOutre);

module.exports = router;
