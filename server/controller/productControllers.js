// The controller file will have the logic/function
// That allows us to respond to each of the requests we make (GET POST PUT DELETE)
const productCtrl = {};

// We import our model
const Product = require("../models/Product");

// Here it will search and store the information that comes from our client
productCtrl.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// The logic to create product (the POST method)
productCtrl.createProduct = async (req, res) => {
  try {
    const {
      name,
      manufacturer,
      description,
      color,
      price,
      imageFileName,
      screen,
      processor,
      ram,
    } = req.body;
    const newProduct = new Product({
      name: name,
      manufacturer: manufacturer,
      description: description,
      color: color,
      price: price,
      imageFileName: imageFileName,
      screen: screen,
      processor: processor,
      ram: ram,
    });

    // We are storing a new document of what comes from the Clientee
    await newProduct.save();
    res.json({ message: "The product has been created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// Let's get a single product
productCtrl.getProductById = async (req, res) => {
  console.log(req);
  try {
    // We tell it to look for the Id
    const product = await Product.findById(req.params.id);
    // Returns us through a json
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// Logic to delete the product by Id, that where it finds the Id parameter
// That comes to us by the ·req we will find it and we will eliminate it from our model
productCtrl.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// Here we have the request ·Put
// It will look for it inside our model and it will ·Update it
productCtrl.updateProduct = async (req, res) => {
  try {
    const {
      name,
      manufacturer,
      description,
      color,
      price,
      imageFileName,
      screen,
      processor,
      ram,
    } = req.body;

    await Product.findByIdAndUpdate(req.params.id, {
      name,
      manufacturer,
      description,
      color,
      price,
      imageFileName,
      screen,
      processor,
      ram,
    });
    res.json({ message: "The product has been updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

module.exports = productCtrl;
