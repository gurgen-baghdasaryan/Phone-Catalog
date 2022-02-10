import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  // Estado donde se alamcena el producto
  const [product, setproduct] = useState({});
  const [loading, setLoading] = useState(false);

  // Id del producto
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/api/products/${id}`);
      setproduct(res.data);
    };
    getProductById();
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <h1>Cargando...</h1>
      ) || (
        <div className="col-md-4 p-2" key={product._id}>
          <div className="card">
            <img variant="top" src={product.imageFileName} />
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
      )}
    </>
  );
};

export default Product;
