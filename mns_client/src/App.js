import { useState } from 'react';
import './App.css';
import Listings from './components/listings';
import Homepage from './components/homepage';

function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [ListingsData, setListingsData] = useState([])
  return (
    <div className="App">
      {showHomePage && <Homepage setListingsData={setListingsData} setShowHomePage={setShowHomePage} />}
      {!showHomePage && <Listings data={ListingsData} />}
    </div>
  );
}

export default App;
