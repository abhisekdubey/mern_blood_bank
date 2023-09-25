const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddelware = require("../midddelwares/authMiddelware");

//router object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController)

//export
module.exports = router;