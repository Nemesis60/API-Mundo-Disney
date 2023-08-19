const express = require("express");
const router = express.Router();

const genderController = require("../controller/genderController");
const genderValidator = require("../validator/genderValidator");

router.post("/", genderValidator.validateCreateGender, genderController.postGender);

router.get("/", genderController.getAllGenders);
router.get("/:id", genderController.getGender);

router.patch("/:id", genderController.updateGender);
router.delete("/:id", genderController.deleteGender);

module.exports = router;