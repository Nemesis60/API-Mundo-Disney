const express = require("express");
const router = express.Router();

const movieSerieController = require("../controller/movieSerieController");
const movieSerieValidator = require("../validator/movie_serieValidator");
const { uploadFile } = require("../controller/uploadControlller");

router.post("/", uploadFile, movieSerieController.postMovieSerie);

router.get("/", movieSerieController.getAllMovieSerie);
router.get("/:id", movieSerieController.getMovieSerie);

router.patch("/:id", movieSerieController.updateMovieSerie);
router.delete("/:id", movieSerieController.deleteMovieSerie);

module.exports = router;