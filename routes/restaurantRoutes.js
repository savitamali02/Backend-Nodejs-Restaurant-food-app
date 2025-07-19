const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();

// Routes
// Create restaurant || POST
router.post("/create", authMiddleware, createRestaurantController);

//get all restaurant || get
router.get("/getAll", getAllRestaurantController);

//get restaurant by id
router.get("/get/:id", getRestaurantByIdController);

//DELETE RESTURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteRestaurantController);

module.exports = router;
