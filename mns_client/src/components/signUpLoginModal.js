import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../stylesheets/signUpModal.css";
import SignUpForm from "./signUpForm";

function SignUpLoginModal(props) {
  const [loginFlag, setLoginFlag] = useState(true);
  //   useEffect(() => {
  //     if (loginFlag) {
  //       document.getElementById("loginButton").style.backgroundColor =
  //         "light blue";
  //     } else {
  //       document.getElementById("loginButton").style.backgroundColor =
  //         "light blue";
  //     }
  //   });
  return (
    <Modal show={props.showModal} onHide={props.closeModal} size="lg">
      <Modal.Header className="text-center">
        <Button
          id="loginButton"
          onClick={(e) => {
            setLoginFlag(true);
            document.getElementById("loginButton").style.backgroundColor =
              "light blue !important";
          }}
        >
          Login In
        </Button>
        <Button
          id="signUpButton"
          onClick={(e) => {
            setLoginFlag(false);
          }}
        >
          Sign Up
        </Button>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm closeModal={props.closeModal} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpLoginModal;
