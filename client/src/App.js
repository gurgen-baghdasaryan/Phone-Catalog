import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  console.log("Product", Product);
  return (
    <div>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/CreateProduct" element={<CreateProduct />} />
          <Route exact path="/edit/:id" element={<CreateProduct />} />
          <Route exact path="/product/:id" element={<Product />} />
          {/* <Route exact path="/product/:id" component={<Product />} /> */}
        </Routes>
        {/* <Product /> */}
      </div>
    </div>
  );
}

export default App;
