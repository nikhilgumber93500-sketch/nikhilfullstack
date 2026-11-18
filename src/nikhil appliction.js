import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gumberheader from "./Gumberheader";
import Gumberfooter from "./Gumberfooter";
import Gumberproduct from "./Gumberproduct";
import GumberHome from "./GumberHome";
import Login4 from "./Login4";
import Categories from "./Gumbercategory";
function App() {
  return (
    <BrowserRouter>

      <Gumberheader />

      <Routes>

        <Route path="/" element={<GumberHome />} />

        <Route path="/products" element={<Gumberproduct />} />
         <Route path="/categories" element={<Categories />} />
 
        <Route path="/login" element={<Login4 />} />

      </Routes>

      <Gumberfooter />

    </BrowserRouter>
  );
}

export default App;
