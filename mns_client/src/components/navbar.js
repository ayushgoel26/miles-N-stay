import { useState } from "react";
import { Col, DropdownButton } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsFillQuestionCircleFill, BsPerson } from "react-icons/bs";
import SignUpLoginModal from "./signUpLoginModal";
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import "./navbar.css";
import SearchBar from "./searchbar";

function NavbarHome() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  const location = useLocation().pathname;

  return (
    <Navbar className="row fix-top" bg="light" expand="md" id="navbarmenu">
      <Col sm="1" className="logo-div">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/logo.png"
              className="d-inline-block align-top logo-img"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Col>
      <Col sm="10">{!(location === "/") && <SearchBar />}</Col>
      <Navbar.Collapse
        className="col-sm-1 justify-content-end"
        id="basic-navbar-nav"
      >
        <ul className="navbar-nav">

          <li className="nav-item mx-2">
            <Dropdown>
              <Dropdown.Toggle variant="light" className='bg-white border-0 p-0' id='dropdown-button-drop-start' style={{ width: "2em", height: "2em", float: "right" }}>
                <BsPerson />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={openSignUpModal}>Login

                </Dropdown.Item>
                <SignUpLoginModal
                  showModal={showSignUpModal}
                  closeModal={closeSignUpModal}
                />
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </li>
          <li className="nav-item mx-2">
            <BsFillQuestionCircleFill
              style={{ width: "2em", height: "2em" }}
            />
          </li>

        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHome;
