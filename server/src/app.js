// Server settings
const express = require("express");
const cors = require("cors");

// This constant stores what we already require from express
const app = express();

// Here we tell the constant application to save us a variable called port and as a second parameter we tell it on which port the server has to listen/execute
app.set("port", process.env.PORT || 4000);

//middleware/logic
app.use(cors()); // Cors It is a module that allows us to have a relationship between our backend and frontend server
app.use(express.json()); // When we do the get request, it returns a json

// Route to our product API
app.use("/api/products", require("./routes/product"));

module.exports = app;
