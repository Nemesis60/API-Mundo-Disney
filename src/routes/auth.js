const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");
const authValidator = require("../validator/authValidator");

router.post("/",  authController.registerUser);
router.post("/login",  authController.loginUser);
router.post("/recover", authController.recoverUser)

router.get("/", authController.getAllUsers);
router.get("/:id", authController.getUser);

router.patch("/:id",  authController.updateUser);
router.delete("/:id", authController.deleteUser);

module.exports = router;