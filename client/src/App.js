import './App.css';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import CreateProduct from './components/CreateProduct'
import ProductList from './components/ProductList'


function App() {
  return (
    <div>
    <NavBar />
    <div className="container p-4">
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/CreateProduct" element={<CreateProduct />} />
        <Route exact path="/edit/:id" element={<CreateProduct />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
