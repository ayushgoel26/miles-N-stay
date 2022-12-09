import { Col, Row, Form } from "react-bootstrap";
import "./searchbar.css";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <Form className="search">
      <Row className="px-5">
        <Col md="5" className="search-inputs">
          <label for="location">
            <div className="label">Location</div>
            <input
              type="text"
              name="location"
              id="ip1"
              placeholder="Where are you going?"
            />
          </label>
        </Col>
        <Col md="2" className="search-inputs">
          <label for="check-in">
            <div className="label">Check in</div>
            <input type="date" id="startDate" />
          </label>
        </Col>
        <Col md="2" className="search-inputs">
          <label for="check-out">
            <div className="label">Check out</div>
            <input type="date" id="endDate" />
          </label>
        </Col>
        <Col md="2" className="search-inputs">
          <label for="guests">
            <div className="label">Guests</div>
            <div className="selectWrapper">
              <select className="selectBox" id="guest-count">
                <option>1 adult</option>
                <option>2 adults</option>
                <option>3 adults</option>
                <option>4 adults</option>
                <option>5 adults</option>
                <option>6 adults</option>
                <option>7 adults</option>
                <option>8 adults</option>
                <option>9 adults</option>
                <option>10 adults</option>
                <option>11 adults</option>
                <option>12 adults</option>
                <option>13 adults</option>
                <option>14 adults</option>
                <option>15 adults</option>
                <option>16 adults</option>
              </select>
            </div>
          </label>
        </Col>
        <Col
          md="1"
          className="search-button orange d-flex flex-wrap align-items-center"
        >
          <button>
            <BsSearch />
          </button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
