// Here we will create the model to be able to access our database
// And we have the schema of the information that we are going to store in the API

// Destructuring to import Mongoose characters and functionalities(schema and model)
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
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
    // The subject of when the document was created
    // And when it was last updated is automatically stored
    timestamps: Date,
  }
);

module.exports = model("Product", productSchema);
