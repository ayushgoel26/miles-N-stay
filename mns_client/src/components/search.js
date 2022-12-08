import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";

function Search(props) {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `http://localhost:3000/listings?city=${city}&type=${type}`
      );
      let resJson = await res.json();
      props.dataSetter(resJson);
      props.setShowHomePage(false);
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
    // useEffect(() => {
    //     fetch('http://localhost:3000/listings?city=${city}&type=${type}')
    //         .then(response => response.json())
    //         .then(data => props.dataSetter(data));
    // }, []);
  };

  return (
    <div className="container-fluid">
      <Form onSubmit={formSubmit}>
        <Row>
          <Form.Group className="col-md-4 mx-2">
            <Form.Label>Destination: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Destination"
              onChange={(event) => setCity(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="col-md-4 mb-2">
            <Form.Label>Property Type: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setType(event.target.value)}
            >
              <option>Choose a property type: </option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="treehouse">Tree house</option>
              <option value="condominium">Condominium</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-md-2 mb-2">
            <Form.Label></Form.Label> <br />
            <Button variant="primary" type="submit" className="mb-2">
              Submit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default Search;
