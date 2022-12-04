import { useState, useEffect } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Country, State, City } from "country-state-city";
import "./signUpModal.css";

function SignUpModal(props) {
  var errorFlag;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: {
      suffix: "",
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    url: "",
    gender: "",
    contact: {
      email: "",
      phone: "",
      emergency: "",
    },
    govt_id: "",
    address: {
      street: "",
      unit_no: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate_field = (field, field_name) => {
    if (field == "") {
      errorFlag = true;
      document.getElementById(field_name + "_error").style.display = "inline";
      document.getElementById(field_name).style.border = "2px solid red";
    }
  };

  const on_focus_error = (e) => {
    document.getElementById(e.target.id + "_error").style.display = "none";
    document.getElementById(e.target.id).style.border = "1px solid #ced4da";
  };

  const validate_form = () => {
    errorFlag = false;
    validate_field(formData.name.first_name, "first_name");
    validate_field(formData.name.last_name, "last_name");
    validate_field(formData.address.street, "street");
    validate_field(formData.address.country, "country");
    validate_field(formData.address.state, "state");
    validate_field(formData.address.city, "city");
    validate_field(formData.address.zip, "zip");
    validate_field(formData.contact.email, "email");
    validate_field(formData.contact.phoneNumber, "phone_number");
    validate_field(formData.username, "username");
    validate_field(formData.password, "password");
    validate_field(confirmPassword, "confirm_password");
    if (
      formData.password != "" &&
      confirmPassword != "" &&
      confirmPassword != formData.password
    ) {
      errorFlag = true;
      var error = document.getElementById("confirm_password_error");
      error.style.display = "inline";
      error.innerHTML = "Password does not match";
      document.getElementById("confirm_password").style.border =
        "2px solid red";
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    validate_form();
    if (!errorFlag) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      fetch("http://localhost:3000/users/signup", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      props.closeModal();
    }
  };

  return (
    <Modal show={props.showModal} onHide={props.closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Row>
              <Col md="2">
                <Form.Select
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: {
                        ...formData.name,
                        middle_name: e.target.value,
                      },
                    })
                  }
                >
                  <option value={""}>Title</option>
                  <option value={"Mr."}>Mr.</option>
                  <option value={"Mrs."}>Mrs.</option>
                  <option value={"Ms."}>Ms.</option>
                  <option value={"Jr."}>Jr.</option>
                  <option value={"Dr."}>Dr.</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="first_name"
                  placeholder="First Name *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: {
                        ...formData.name,
                        first_name: e.target.value,
                      },
                    })
                  }
                />
                <Form.Text className="error" id="first_name_error">
                  Please enter First Name
                </Form.Text>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Middle Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: {
                        ...formData.name,
                        middle_name: e.target.value,
                      },
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="last_name"
                  placeholder="Last Name *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: {
                        ...formData.name,
                        last_name: e.target.value,
                      },
                    })
                  }
                />
                <Form.Text className="error" id="last_name_error">
                  Please enter Last Name
                </Form.Text>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Row className="pb-2">
              <Col>
                <Form.Control
                  type="text"
                  id="street"
                  placeholder="Street *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        street: e.target.value,
                      },
                    })
                  }
                />
                <Form.Text className="error" id="street_error">
                  Please enter Street Address
                </Form.Text>
              </Col>
              <Col md="3">
                <Form.Control
                  type="number"
                  placeholder="Unit No"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: {
                        ...formData.address,
                        unit_no: e.target.value,
                      },
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  id="country"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    document
                      .getElementById("state")
                      .removeAttribute("disabled");
                  }}
                >
                  <option value={""}>Country *</option>
                  {Country.getAllCountries().map((country) => (
                    <option value={country.isoCode} key={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text className="error" id="country_error">
                  Please select country
                </Form.Text>
              </Col>
              <Col>
                <Form.Select
                  id="state"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => {
                    setState(e.target.value);
                    document.getElementById("city").removeAttribute("disabled");
                  }}
                  disabled
                >
                  <option value={""}>State *</option>
                  {State.getStatesOfCountry(country).map((state) => (
                    <option value={state.isoCode} key={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text className="error" id="state_error">
                  Please select state
                </Form.Text>
              </Col>
              <Col>
                <Form.Select
                  id="city"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  disabled
                >
                  <option value={""}>City *</option>
                  {City.getCitiesOfState(country, state).map((city) => (
                    <option value={city.isoCode} key={city.isoCode}>
                      {city.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text className="error" id="city_error">
                  Please select city
                </Form.Text>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  id="zip"
                  placeholder="Zip Code *"
                  pattern="\d{5,5}(-\d{4,4})?"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <Form.Text className="error" id="zip_error">
                  Please enter Zip Code
                </Form.Text>
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Email ID *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="error" id="email_error">
                  Please enter Email
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  id="phone_number"
                  placeholder="Phone Number *"
                  pattern="[0-9]{10}"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Form.Text className="error" id="phone_number_error">
                  Please enter Phone Number
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Emergency Contact"
                  pattern="[0-9]{10}"
                  onChange={(e) => setEmergencyContact(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  id="username"
                  placeholder="Username *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Form.Text className="error" id="username_error">
                  Please enter Username
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Password *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="error" id="password_error">
                  Please enter Password
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm Password *"
                  onFocus={(e) => on_focus_error(e)}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Form.Text className="error" id="confirm_password_error">
                  Please confirm password
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Form.Select onChange={(e) => setGender(e.target.value)}>
                <option value={""}>Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Others"}>Others</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="file"
                  placeholder="Government ID"
                  onChange={(e) => setGovernmentID(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Upload Government ID
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
