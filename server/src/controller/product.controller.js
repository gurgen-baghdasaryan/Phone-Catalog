const productCtrl = {};

const Product = require("../models/Product");

productCtrl.getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

productCtrl.createProduct = async (req, res) => {
  const { id, name, manufacturer, description, color, price , imageFileName ,screen, processor, ram} = req.body;
  const newProduct = new Product({
    id: id,
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
