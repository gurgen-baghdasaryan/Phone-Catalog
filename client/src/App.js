//RRD allows us to route our components
import { Routes, Route } from "react-router-dom";

// Importing our componentssss
import "./App.css";
import NavBar from "./components/NavBar";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container p-4">
        <Routes>
          {/* Here we are going to include our routes */}          
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/CreateProduct" element={<CreateProduct />} />
          <Route exact path="/edit/:id" element={<CreateProduct />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
