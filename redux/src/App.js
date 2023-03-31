import { Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import './App.css';
import ProductList from "./containers/ProductList";
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
      <Route path='/' element = { < ProductList /> } />
      <Route path='products/:productId' element = { < ProductDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
