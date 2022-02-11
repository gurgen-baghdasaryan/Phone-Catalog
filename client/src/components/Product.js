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
      {(loading && <h1>Cargando...</h1>) || (
        <div className="card mb-3 d-flex flex-column" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.imageFileName}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">Name: {product.name}</h5>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">
                  Manufacturer: {product.manufacturer}
                </p>
                <p className="card-text">Color: {product.color}</p>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Screen: {product.screen}</p>
                <p className="card-text">Processor: {product.processor}</p>
                <p className="card-text">Ram: {product.ram}</p>
                <button type="button" className="btn btn-success m-0 mt-4">
                  Check our quality
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
