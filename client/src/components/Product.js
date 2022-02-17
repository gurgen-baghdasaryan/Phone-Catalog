import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  // State where the product is stored
  const [product, setproduct] = useState({});
  // State where the loading is stored
  const [loading, setLoading] = useState(false);

  // Id of product
  const { id } = useParams();
  // The logic of this useeffect allows to find a specific product by the id
  useEffect(() => {
    const getProductById = async () => {
      // Update our load state to true
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setproduct(res.data);
    };
    getProductById();
    // Update our load state to false
    setLoading(false);
  }, []);

  return (
    <>
      {(loading && <h1>Cargando...</h1>) || (
        <div className="card mb-3 d-flex flex-column" style={{ width: "100%" }}>
          {/* To style our component we use bootstrap*/}
          <div className="row g-0">
            <div className="col-md-4">
              {/* The profuct img information part*/}
              <img
                src={product.imageFileName}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                {/* The profuct information part*/}
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
                {/* The check button */}
                <button
                  type="button"
                  className="btn btn-outline-success m-0 mt-4"
                >
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
