import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductListing from "./component/ProductListing"
import Header from "./component/Header";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <div>
    <BrowserRouter>
       <Header />
    <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetails/>} />
    </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
