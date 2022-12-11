import { useEffect } from 'react';
import PropertyCard from "./propertyCard";
import { Row, Container } from "react-bootstrap";

function Listings(props) {
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:3000/listings/"
        )
      ).json();
      props.setListingsData(data);
    };
    dataFetch();
  }, []);

  return (
    <Container fluid>
        <Row>
            {props.ListingsData.map( (listing,indx) => <PropertyCard key={indx} info={listing} /> )}
        </Row>
    </Container>
  )
};

export default Listings;