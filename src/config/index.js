const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected...");
  } catch (error) {
    console.log(`Database Connection Error: ${error}`);
  }
};

module.exports = {
  dbConnect,
};
