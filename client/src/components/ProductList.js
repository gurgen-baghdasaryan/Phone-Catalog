import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imporing React icons
import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

//axios allows us to make requests to the backend
import axios from "axios";

const ProductList = () => {
  // State where the LIST of prudcts is stored
  const [list, setList] = useState([]);
  // This useEffect we will use as many times as necessary to render the value that we have in our API
  useEffect(() => {
    // The logic of this useEffect is that every time there is a change in the list state, render the component to update the information.
    const getProducts = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      // In setList we store what we receive from data
      setList(res.data);
    };
    getProducts();
  }, [list]);
  //The logic to delete the product through an id
  const deleteProduct = async (id) => {
    await axios.delete("http://localhost:4000/api/products/" + id);
  };
  return (
    <div className="row ">
      {/* We tell our state variable to iterate with map */}
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

            <div className="card-footer d-flex">
              <div className="card-body">
                {/* The Show more button */}
                <Link
                  className="btn btn-outline-success"
                  to={"/product/" + lista._id}
                >
                  Show more
                </Link>
              </div>
              <div className="card-body d-flex justify-content-around">
                {/* The Edit button */}
                <Link
                  className="btn btn-outline-dark"
                  to={"/edit/" + lista._id}
                >
                  <GrUpdate />
                </Link>
                {/* The delete button */}
                <button
                  className="btn btn-outline-dark "
                  onClick={() => deleteProduct(lista._id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
