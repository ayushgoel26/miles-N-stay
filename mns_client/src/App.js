import { useState } from "react";
import "./App.css";
import Listings from "./components/listings";
import Homepage from "./components/homepage";
import NavbarHome from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPropertyForm from "./components/AddProperty/AddPropertyForm";
import ListingDetails from "./components/ListingDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarHome></NavbarHome>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/allProperties" element={<Listings />} />
          <Route path="/addProperty" element={<AddPropertyForm />} />
          <Route path="/listingDetails" element={<ListingDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
