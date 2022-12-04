import { useState } from 'react';
import './App.css';
import Listings from './components/listings';
import Search from './components/search';
function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [ListingsData, setListingsData] = useState([])
  return (
    <div className="App">
      <Search dataSetter={setListingsData} setShowHomePage={setShowHomePage}/>
      {!showHomePage && <Listings data={ListingsData}/>}       
    </div>
  );
}

export default App;
