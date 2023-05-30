const express = require("express");

const router = express.Router();

const authController = require("../controlers/auth.controler");

router.get("/signup",authController.getSignUP);
router.get("/login",authController.getLogiIn);

module.exports = router;
