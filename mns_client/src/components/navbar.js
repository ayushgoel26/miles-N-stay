import { Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsFillQuestionCircleFill, BsPerson } from "react-icons/bs";
import "./navbar.css";
import SearchBar from "./searchbar";

function NavbarHome(props) {
  return (
    <Navbar className="row" bg="light" expand="md" id="navbarmenu">
      <Col sm="1" className="logo-div">
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            className="d-inline-block align-top logo-img"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Col>
      <Col sm="10">{!props.showHomePage && <SearchBar />}</Col>
      <Navbar.Collapse
        className="col-sm-1 justify-content-end"
        id="basic-navbar-nav"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-2">
            <BsFillQuestionCircleFill style={{ width: "2em", height: "2em" }} />
          </li>
          <li class="nav-item mx-2">
            <BsPerson style={{ width: "2em", height: "2em" }} />
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
