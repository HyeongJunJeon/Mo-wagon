import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Specification from "./pages/Specification";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/specification" element={<Specification />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
