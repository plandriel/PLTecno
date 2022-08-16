import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./components/Categories/Categories";
import Form from "./pages/Form/Form";
import CartCustomProvider from "./contexts/cartContext";

function App() {

  const greeting = "PL Tecno";

  return (
    <div>
      <BrowserRouter>
      <CartCustomProvider>
          <CssBaseline>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home greeting={greeting} />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/form" element={<Form />} />
                <Route path="/item/:id" element={<ItemDetailPage />} />
                <Route path="/categories/:categoryId" element={<Categories />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer />
          </CssBaseline>
          </CartCustomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
