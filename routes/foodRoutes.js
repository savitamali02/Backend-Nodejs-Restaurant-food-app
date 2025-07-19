const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Routes
//create foods
router.post("/create", authMiddleware, createFoodController);

//GET ALL FOOD
router.get("/getAll", getAllFoodsController);

//GET SINGLE FOOD
router.get("/get/:id", getSingleFoodController);

//GET  FOOD BY RESTAURANT
router.get("/getByRestaurant/:id", getFoodByResturantController);

//UPDATE FOOD
router.put("/update/:id", authMiddleware, updateFoodController);

//DELETE FOOD
router.delete("/delete/:id", authMiddleware, deleteFoodController);

//PLACE ORDER
router.post("/placeorder", authMiddleware, placeOrderController);

//order status
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,

  orderStatusController
);

module.exports = router;
