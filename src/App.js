import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Specification from "./pages/Specification";
import Price from "./pages/Price";
import FAQ from "./pages/FAQ";
import TsNote from "./pages/TsNote";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Specification" element={<Specification />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Note" element={<TsNote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
