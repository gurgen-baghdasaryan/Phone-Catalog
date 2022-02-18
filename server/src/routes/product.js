const express = require('express');
const router = express.Router();

// We import the functionalities of our controller.
const {
  getProduct,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controller/product.controller");

router
  .route("/")
  // Its our global request
  .get(getProduct)
  // It is the Post request where we have the logic to create a product
  .post(createProduct);

router
  .route("/:id")
  // When we send a parameter through the URL we will execute get(), delete(), put()
  // When we make these requests we must send a indicator so we can tell the API which document we want
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
