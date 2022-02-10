import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      setList(res.data);
    };
    getProducts();
  }, []);

  console.log('list',list)

  const deleteProduct = async (id) => {
    await axios.delete("http://localhost:4000/api/products/" + id);
  };
  return (
    <div className="row">
      {list.map((lista) => (
        <div className="col-md-4 p-2" key={lista._id}>
          <div className="card">
            <img alt="mobileModel" variant="top" src={lista.imageFileName} />
            <div className="card-header">
              <h5>Name: {lista.name}</h5>
            </div>
            <div className="card-body">
              <p>Description: {lista.description}</p>
              <p>Price: {lista.price}$</p>
            </div>

            <div className="card-footer d-flex justify-content-around">
              <Link className="btn btn-dark  m-0.8" to={"/product/" + lista._id}>
                Show more
              </Link>
              <Link className="btn btn-primary" to={"/edit/" + lista._id}>
                Edit
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => deleteProduct(lista._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
