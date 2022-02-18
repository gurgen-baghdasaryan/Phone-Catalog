// Server settings
require("dotenv").config(); // 
const express = require("express");
const cors = require("cors");
const connectionDB = require('./config/db');//conection to BBDD with Mongoose
const productRoutes = require('./routes/product'); //Create the express router object 


connectionDB();

// This constant stores what we already require from express
const app = express();


//middleware/logic
//middleware/logic
app.use(cors()); // Cors It is a module that allows us to have a relationship between our backend and frontend server
app.use(express.json()); // When we do the get request, it returns a json

// Route to our product API
app.use("/api/products", productRoutes);

// Here we tell the constant application to save us a variable called port and as a second parameter we tell it on which port the server has to listen/execute
const PORT = process.env.PORT || 4000
// This logic is to run the server
app.listen(PORT, ()=> console.log(`server running in the port  ${PORT}`))
