import React, { Component } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import auth from "../../services/authService";
import { register } from "../../services/userService";

import "./signup.scss";
import { Link } from "react-router-dom";

import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  firstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  lastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  emailChanged = (e) => {
    this.setState({ email: e.target.value });
  };
  passwordChanged = (e) => {
    this.setState({ password: e.target.value });
  };
  signUp = async () => {
    try {
      const { firstName, lastName, email, password } = this.state;
      let data = {
        username: email,
        password: password,
        name: `${firstName} ${lastName}`,
      };
      const res = await register(data);
      auth.loginWithJwt(res.headers["x-auth-token"]);
      window.location = "/";
    } catch (e) {
      const errors = { ...this.state.errors };
      errors.username = e.response.data;
      this.setState({ errors });
      //d
    }
  };

  render() {
    return (
      <div id="signup">
        <div className="box">
          <div className="row">
            <div className="text-center col-md-5 d-flex flex-column justify-content-center align-items-center">
              <img src="/images/login/Des_-_2-removebg-preview.png" alt="image" /> <br />
              <img src="/images/login/bdc612b495221fccdb98b330271f72a2.png" className="mt-2 d-md-block d-none" alt="image" width="300px" />
            </div>
            <div className="col-md-2 d-md-block d-none text-center">
              <div className="line" />
            </div>
            <div className="col-md-5 text-center mt-md-0 mt-2 d-flex flex-column justify-content-center">
              <h4>Sign Up</h4>
              <p>A basic widget for getting the user input is a text field. Keyboard and mouse</p>
              <Input onChange={this.firstNameChange} placeholder="First Name" size={"large"} style={{ borderRadius: "50px", marginBottom: "10px" }} />
              <Input onChange={this.lastNameChange} placeholder="Last Name" size={"large"} style={{ borderRadius: "50px", marginBottom: "10px" }} />
              <Input onChange={this.emailChanged} placeholder="Email" size={"large"} style={{ borderRadius: "50px" }} />
              <Input.Password onChange={this.passwordChanged} placeholder="Password" className="mt-2" size={"large"} style={{ borderRadius: "50px" }} />

              <Form.Item>
                <div className="col-md-12 mt-3 d-flex justify-content-between" style={{ width: "100%", padding: "0" }}>
                  <Form.Item name="remember">
                    <Checkbox>I agree to the terms of Service and Privacy Policy</Checkbox>
                  </Form.Item>
                </div>
              </Form.Item>
              <Link to="/signup">
                <Button onClick={this.signUp} type="primary" block className="mt-3" size={"large"} style={{ borderRadius: "50px" }}>
                  Sign Up
                </Button>
              </Link>

              <Form.Item>
                <div className="col-md-12 mt-3 d-flex justify-content-center align-items-center">
                  <a className="login-form-forgot mr-3 " href="">
                    Are you Already a member?
                  </a>
                  <Link to="/login">
                    <Form.Item name="remember">Login</Form.Item>
                  </Link>
                </div>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
