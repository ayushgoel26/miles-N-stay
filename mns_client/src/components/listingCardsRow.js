import { Card, Row, Col } from "react-bootstrap";
import "./listingsCardsRow.css";
import { Link } from "react-router-dom";

const ListingsCardsRow = (props) => {
  return (
    <Row md={2} lg={4} sm={1} key={props.keys} className="mx-2 my-2">
      {props.cards.map((d) => (
        <Col key={d.id} className="mb-3">
          <Card>
            <Link to={`/listingDetails`} state={{ from: d._id }}>
              <Card.Img
                className="rounded"
                variant="top"
                src={"/img/jbnu2.jpg"}
              />
            </Link>
            <p className="small text-uppercase ms-3 mb-0">
              <strong>{d.property_address.city}</strong>
            </p>
            <Card.Body>
              <Card.Title>{d.property_name}</Card.Title>
              <Card.Text>
                <i>{d.cost.per_night}/night</i>
                <br />
                {d.summary}...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ListingsCardsRow;