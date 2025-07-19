const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to database ${mongoose.connection.host}`.bgWhite);
  } catch (error) {
    console.log("DB Error:".bgRed, error.message.red);
  }
};

module.exports = connectDb;
