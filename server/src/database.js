// Connection string to be able to connect our server with our database
require("dotenv").config();


const mongoose = require("mongoose");

const URI = "mongodb+srv://gugodev:1234gugodev@cluster0.wezue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  

// It connects through the URI which is the variable we are connecting to the information we store in our environment variable.
mongoose.connect(URI);

// With this we are telling the mongoose to connect
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("The database has been connected successfully: ", URI);
});
