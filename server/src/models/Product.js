// Here we will create the model to be able to access our database
// And we have the schema of the information that we are going to store in the API

// Destructuring to import Mongoose characters and functionalities(schema and model)
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,
  },

  {
    timestamps: true,
  }
);
// The subject of when the document was created
// And when it was last updated is automatically stored

const Product = mongoose.model("product", productSchema);
module.exports = Product;
