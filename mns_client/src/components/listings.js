import { useEffect, useState } from "react";
import PropertyCard from "./propertyCard";

function Listings(props) {
    const [ListingsData, setListingsData] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city: 'austin' })
        };
        fetch('http://localhost:3000/listings/', requestOptions)
            .then(response => response.json())
            .then(data => setListingsData(data));    
    }, []);
    // res = ListingsData.map((listing, idx) => <PropertyCard data={listing} />)
    // console.log(res)
  return (
    <div class = 'container-fluid'> 
        <div class = "row">
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
            {ListingsData.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
        </div>
    </div>
    
  );
}

export default Listings;