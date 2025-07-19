const mongoose = require("mongoose");

// Schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrQ7Ly9pqZ6F06bzC5H8hu1Bl7scJF-1IGw&s",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
