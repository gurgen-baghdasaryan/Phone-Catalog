require("dotenv").config();
const mongoose = require("mongoose");

//mongo conexion
const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected  to MongoDB");
  } catch (error) {
    console.error("Error: not connected to  MongoDB");
    process.exit(1);
  }
};

module.exports = connectionDB;
