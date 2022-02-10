import React, { useState } from "react";
import axios from 'axios'

const CreateProduct = () => {
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

  const [product, setProduct] = useState(valueInitial);

  const dataCapture = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const dataSave = async(e)=>{
    console.log(product);
    const newProduct = {
       

        name:product.name,
        manufacturer:product.manufacturer,
        description:product.description,
        color:product.color,
        price:product.price,
        imageFileName:product.imageFileName,
        screen:product.screen,
        processor:product.processor,
        ram:product.ram,
    }

    await axios.post('http://localhost:4000/api/products', newProduct)
    setProduct({...valueInitial})
  }

  return (
    <div className="col-md-5 offset-md-3">
      <div className="card card-body">
        <form onSubmit={dataSave}>
          <h2 className="text-center">Create Product</h2>
          <div className="mb-3">
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
          <button className="btn btn-primary form-control">Save Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
