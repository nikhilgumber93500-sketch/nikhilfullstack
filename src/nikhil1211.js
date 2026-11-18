import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gumberheader from "./Gumberheader";
import Gumberfooter from "./Gumberfooter";
import Gumberproduct from "./Gumberproduct";
import GumberHome from "./GumberHome";
import Login4 from "./Login4";
import Register from "./Register";
import Categories from "./Gumbercategory";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Profile from "./Profile";
import Privacy from "./Privacy";
function App() {
  return (
    <BrowserRouter>

      <Gumberheader />

      <Routes>

        <Route path="/" element={<GumberHome />} />

        <Route path="/products" element={<Gumberproduct />} />
         <Route path="/categories" element={<Categories />} />
 
        <Route path="/login" element={<Login4 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />

      </Routes>

      <Gumberfooter />

    </BrowserRouter>
  );
}

export default App;
