const productCtrl = {};

const Product = require("../models/Product");

productCtrl.getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

productCtrl.createProduct = async (req, res) => {
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

  await newProduct.save();
  res.json({ message: "The product has been created" });
};

productCtrl.getProductById = async (req, res) => {
  console.log(req);
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err);
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product has been deleted" });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err,
    });
  }
};

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
  } catch (err) {
    console.log(err);
  }
};

module.exports = productCtrl;
