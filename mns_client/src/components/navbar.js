import { useState } from "react";
import { Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsFillQuestionCircleFill, BsPerson } from "react-icons/bs";
import SignUpLoginModal from "./signUpLoginModal";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";
import SearchBar from "./searchbar";

function NavbarHome(props) {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  const location = useLocation().pathname;

  return (
    <Navbar className="row fix-top" bg="light" expand="md" id="navbarmenu">
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
      <Col sm="10">{!(location === "/") && <SearchBar />}</Col>
      <Navbar.Collapse
        className="col-sm-1 justify-content-end"
        id="basic-navbar-nav"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-2">
            <Link to="/addProperty">
              Show Reservations
            </Link>
          </li>
          <li class="nav-item mx-2">
            <Link to="/addProperty">
              Become a Host
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/">
              <BsFillQuestionCircleFill
                style={{ width: "2em", height: "2em" }}
              />
            </Link>
          </li>
          <li className="nav-item mx-2">
            <BsPerson
              onClick={openSignUpModal}
              style={{ width: "2em", height: "2em" }}
            />
            <SignUpLoginModal
              showModal={showSignUpModal}
              closeModal={closeSignUpModal}
            />
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
