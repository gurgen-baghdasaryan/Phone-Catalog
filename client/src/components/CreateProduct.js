import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const CreateProduct = () => {
  // The initial value of our states
  const valueInitial = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 1,
    imageFileName: "",
    screen: "",
    processor: "",
    ram: 0,
  };
  //We can capture within the id the parameter that we are receiving from the URL
  let { id } = useParams();
  // State where the product is stored
  const [product, setProduct] = useState(valueInitial);
  // State where the id is stored
  const [subId, setSubId] = useState(id);
  // Here is where we capture the data by value
  const dataCapture = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // Here we store the captured data and send it to our API
  const dataSave = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: product.name,
      manufacturer: product.manufacturer,
      description: product.description,
      color: product.color,
      price: product.price,
      imageFileName: product.imageFileName,
      screen: product.screen,
      processor: product.processor,
      ram: product.ram,
    };
    // Here we create the post logic.
    await axios.post("https://phonethe.herokuapp.com/api/products", newProduct);
    // Updating the initial value
    setProduct({ ...valueInitial });
  };
  //The function to update the product
  const updateProduct = async (e) => {
    e.preventDefault();
    const newUser = {
      name: product.name,
      description: product.description,
      price: product.price,
    };
    //The put petition logic concatenated with subId
    await axios.put("https://phonethe.herokuapp.com/api/products/" + subId, newUser);
    setProduct({ ...valueInitial });
    // Clean up our state
    setSubId("");
  };
  //logic to make the API request
  const editOne = async (idValue) => {
    const res = await axios.get(
      "https://phonethe.herokuapp.com/api/products/" + idValue 
    );
    setProduct({
      name: res.data.name,
      description: res.data.description,
      price: res.data.price,
    });
  };
  // The logic of this useEffect is if the id has value, do a function where we get request
  useEffect(() => {
    if (subId !== "") {
      editOne(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-5 offset-md-3">
      {/* To style our component we use bootstrap*/}
      <div className="card card-body">
        {/* The event onSubmit allows us to send the information of saved data */}
        <form onSubmit={dataSave}>
          <h2 className="text-center">Create Product</h2>
          <div className="mb-3">
            {/* Enter product name */}
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              required
              name="name"
              value={product.name}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product manufacturer */}
            <label>Manufacturer:</label>
            <input
              type="text"
              className="form-control"
              placeholder="manufacturer"
              required
              name="manufacturer"
              value={product.manufacturer}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product description */}
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              placeholder="description"
              required
              name="description"
              value={product.description}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product color */}
            <label>Color:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Color..."
              name="color"
              value={product.color}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product price */}
            <label>Price:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Dollar/Euro"
              required
              name="price"
              value={product.price}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product image */}
            <label>ImageFileName:</label>
            <input
              type="text"
              className="form-control"
              placeholder="img url"
              required
              name="imageFileName"
              value={product.imageFileName}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product screen */}
            <label>Screen:</label>
            <input
              type="text"
              className="form-control"
              placeholder="screen"
              name="screen"
              value={product.screen}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product Processor */}
            <label>Processor:</label>
            <input
              type="text"
              className="form-control"
              placeholder="modelo"
              name="processor"
              value={product.processor}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            {/* Enter product ram */}
            <label>Ram:</label>
            <input
              type="number"
              className="form-control"
              placeholder="ram gb"
              name="ram"
              value={product.ram}
              onChange={dataCapture}
            />
          </div>
          {/* Our save product button */}
          <button className="btn btn-primary form-control">Save Product</button>
        </form>
        {/* The event onSubmit allows us to send the information we want to update */}
        <form onSubmit={updateProduct}>
          {/* Our Update product button */}
          <button className="btn btn-primary form-control mt-1">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
