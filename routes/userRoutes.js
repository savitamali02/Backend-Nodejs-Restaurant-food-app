const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//routes
//Get user  get
router.get("/getUser", authMiddleware, getUserController);

//update profile
router.put("/updateUser", authMiddleware, updateUserController);

//password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

//reset password
router.post("/resetPassword", authMiddleware, resetPasswordController);

//delete user
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;
