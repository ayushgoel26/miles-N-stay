import PropertyCard from "./propertyCard";

function Listings(props) {
console.log(props.data)
  return (
    <div class = 'container-fluid'> 
        <div class = "row">
            {props.data.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
        </div>
    </div>
    
  );
}

export default Listings;