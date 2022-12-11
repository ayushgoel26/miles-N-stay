import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import md5 from "md5";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    var data = {
      username: username,
      password: password,
    };
    fetch("http://localhost:3000/users/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == "login successful") {
          props.closeModal();
        } else {
          document.getElementsByClassName("error").style.display = "inline";
        }
      });
  };
  return (
    <Form onSubmit={loginUser}>
      <Form.Text className="error justify-content-center">
        Username or password is incorrect
      </Form.Text>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(md5(e.target.value))}
        ></Form.Control>
      </Form.Group>
      <Row className="justify-content-center mx-3">
        <Button type="submit">Login</Button>
      </Row>
    </Form>
  );
}

export default LoginForm;