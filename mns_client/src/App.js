import { useState } from "react";
import "./App.css";
import Listings from "./components/listings";
import Homepage from "./components/homepage";
import NavbarHome from "./components/navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddPropertyForm from "./components/AddProperty/AddPropertyForm";
import ListingDetails from "./components/ListingDetails";
import EditPropertyModal from "./components/EditPropertyModal";


function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [ListingsData, setListingsData] = useState([]);
  return (
    <Router>
    <div className="App">
      <NavbarHome showHomePage={showHomePage}></NavbarHome>
      {/* {showHomePage && (
        <Homepage
          setListingsData={setListingsData}
          setShowHomePage={setShowHomePage}
        />
      )} */}
      {/* {!showHomePage && <Listings data={ListingsData} />} */}
      <Routes>
      <Route exact path="/" element={<Homepage setListingsData={setListingsData}
          setShowHomePage={setShowHomePage}/>} />
      <Route path="/addProperty" element={<AddPropertyForm/>} />
      <Route path="/listingDetails" element={<ListingDetails/>} /> 
      <Route path="/editProperty" element={<EditPropertyModal/>} /> 
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
