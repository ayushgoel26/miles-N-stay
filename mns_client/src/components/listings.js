import PropertyCard from "./propertyCard";
import { Row, Container } from "react-bootstrap";

function Listings(props) {
  return (
    <Container fluid>
        <Row>
            {props.data.map( (m,indx) => <PropertyCard key={indx} info={m} /> )}
        </Row>
    </Container>
  )
};

export default Listings;