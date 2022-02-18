// Connection string to be able to connect our server with our database
require("dotenv").config();
const mongoose = require('mongoose');

// It connects through the URI which is the variable we are connecting to the information we store in our environment variable.
const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("connected  to MongoDB");

    } catch (error) {
        console.error("Error: not connected to  MongoDB");
        process.exit(1);
    }
}

module.exports = connectionDB;