import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home";
import Booking from "pages/booking";
const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/book" element={<Booking />} />
      {/* <Route path="/book-to-read/:id" element={<Home />} /> */}
      {/* <Route path="/book-to-read/:id" element={<BookDetail />} /> */}
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
};

export default App;
