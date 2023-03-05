import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar }  from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import "./index.css"
import Services from "./Services"
import Reviews from "./Reviews";
import { Home } from "./Home";
import {React} from 'react'
import CurrentForm from "./CurrentForm";

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CurrentForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
