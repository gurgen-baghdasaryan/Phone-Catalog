import React, { useEffect, useState } from "react";
import axios from 'axios'


const Product = ({props}) => {

  const [product, setproduct] = useState({})
  console.log(product);
  useEffect(() => {
    const { id } = props.match.params
    
    axios.get(`http://localhost:4000/api/products/${id}`)
        .then(res => {
          
          setproduct(res.data)
          
        })
        .catch(error => console.log(error))

     
   }, [product]);
  return (
    <div className="col-md-4 p-2" key={product._id}>
      <div className="card">
        <img  variant="top" src={product.imageFileName} />
        <div className="card-header">
          <h5>Name: {product.name}</h5>
        </div>
        <div className="card-body">
          <p>Description: {product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Price: {product.price}$</p>
          <p>Price: {product.price}$</p>
          <p>Price: {product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
