const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");

const router = express.Router();

// Routes
//create category
router.post("/create", authMiddleware, createCatController);

//GET ALL CATEGORY
router.get("/getAll", getAllCatController);

//DELETE CATEGORY
router.put("/update/:id", authMiddleware, updateCatController);

//DELETE CATEGORY
router.delete("/delete/:id", authMiddleware, deleteCatController);

module.exports = router;
