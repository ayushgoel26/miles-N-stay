import { useState } from "react";
import { Form, Row, Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";

function Search(props) {
  const searchParams = new URLSearchParams();
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let api_url = "http://localhost:3000/listings";
      if (city !== "") {
        searchParams.append("city", city);
      }
      if (type !== "") {
        searchParams.append("type", type);
      }
      if (startDate !== null) {
        searchParams.append(
          "startDate",
          startDate.toISOString().substring(0, 10)
        );
      }
      if (endDate !== null) {
        searchParams.append("endDate", endDate.toISOString().substring(0, 10));
      }
      for (const [name, value] of searchParams.entries()) {
        console.log(name, value);
      }
      console.log(searchParams);
      let url = searchParams.keys().next().done
        ? api_url
        : api_url + "?" + searchParams.toString();
      console.log(url);
      let listings = await fetch(url);
      let listingsData = await listings.json();
      props.dataSetter(listingsData);
      props.setShowHomePage(false);
    } catch (err) {
      console.log(err);
    }
  };
  // const browseAll = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let api_url = "http://localhost:3000/listings";
  //     let listings = await fetch(api_url);
  //     let listingsData = await listings.json();
  //     props.dataSetter(listingsData);
  //     props.setShowHomePage(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };




  return (
    <Card id="search-card" className="col-md-4">
      <h1 className="h3 mb-3 text-center">RESERVE A STAY</h1>
      <Form onSubmit={formSubmit}>
        <Row className="py-2 px-2">
          <Form.Group className="col-md-6">
            <Form.Control
              type="text"
              placeholder="Destination*"
              onChange={(event) => setCity(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setType(event.target.value)}
            >
              <option>Property type</option>
              <option value="apartment">Apartment</option>
              <option value="boat">Boat</option>
              <option value="cave">Cave</option>
              <option value="castle">Castle</option>
              <option value="condominium">Condominium</option>
              <option value="countryside">Countryside</option>
              <option value="dome">Dome</option>
              <option value="luxury">Luxury</option>
              <option value="mansion">Mansion</option>
              <option value="townhouse">Townhouse</option>
              <option value="treehouse">Treehouse</option>
              <option value="villa">Villa</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="py-2 px-2">
          <Form.Group className="col-md-6">
            <Form.Control
              value={startDate ? startDate.toISOString().substring(0, 10) : ""}
              type="date"
              name="startDate"
              min={new Date()}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Control
              value={endDate ? endDate.toISOString().substring(0, 10) : ""}
              type="date"
              name="endDate"
              min={
                startDate ? startDate.getDate() + 1 : new Date().getDate() + 1
              }
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </Form.Group>
        </Row>
        <Row className="pb-2 px-2">
          <Form.Group>
            <Button variant="primary" id="card-search" type="submit">
              Find a place!
            </Button>
          </Form.Group>
        </Row>
        <Row className="pb-2 px-2">
          <Form.Group>
            <p className="text-muted">
              {" "}
              <b>
                Not sure where to go?{" "}

                <Link to="/allProperties">
                  Browse here!
                </Link>
              </b>
            </p>
          </Form.Group>
        </Row>
      </Form>
    </Card>
  );
}

export default Search;
