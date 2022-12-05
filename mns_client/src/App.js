import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import SignUpModal from "./components/signUpModal";
import Listings from "./components/listings";
import Search from "./components/search";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [ListingsData, setListingsData] = useState([]);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);
  return (
    <div className="App">
      <Search dataSetter={setListingsData} setShowHomePage={setShowHomePage} />
      {!showHomePage && <Listings data={ListingsData} />}
      <Button variant="primary" onClick={openSignUpModal}>
        Sign Up
      </Button>
      <SignUpModal showModal={showSignUpModal} closeModal={closeSignUpModal} />
    </div>
  );
}

export default App;
