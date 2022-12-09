import './App.css';
import AddPropertyForm from './components/AddProperty/AddPropertyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Listings from "./components/listings";
import Homepage from "./components/homepage";
import NavbarHome from "./components/navbar";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [ListingsData, setListingsData] = useState([]);
  return (
    <div className="App">
      <AddPropertyForm />
      <NavbarHome showHomePage={showHomePage}></NavbarHome>
      {showHomePage && (
        <Homepage
          setListingsData={setListingsData}
          setShowHomePage={setShowHomePage}
        />
      )}
      {!showHomePage && <Listings data={ListingsData} />}
    </div>
  );
}

export default App;
