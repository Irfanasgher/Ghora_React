import React, { Component } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import auth from "../../services/authService";
import { Link } from "react-router-dom";
import "./login.scss";

import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  onEmailChange = (e) => {
    // console.log("Email", e.target.value);
    this.setState({ email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  submitLogin = async () => {
    try {
      const { email, password } = this.state;

      await auth.login(email, password);
      //   const { state } = this.props.location;
      //   window.location = state ? state.from.pathname : "/";
      this.props.history.push("/profile");
    } catch (e) {
      if (e.response && e.response.data === 400) {
        const errors = { ...this.state.errors };
        errors.email = e.response.data;
        this.state({ errors });
      }
    }
  };

  render() {
    return (
      <div id="login">
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
              <h5>LOG IN</h5>
              <p>A basic widget for getting the user input is a text field. Keyboard and mouse</p>
              <Input onChange={this.onEmailChange} placeholder="Email" size={"large"} style={{ borderRadius: "50px" }} />
              <Input.Password onChange={this.onPasswordChange} placeholder="Password" className="mt-2" size={"large"} style={{ borderRadius: "50px" }} />

              <Form.Item>
                <div className="col-md-12 mt-3 d-flex justify-content-between" style={{ width: "100%", padding: "0" }}>
                  <Form.Item name="remember">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </div>
              </Form.Item>
              {/* <div className="d-flex justify-content-between">
                <Button
                  style={{
                    borderRadius: "50px",
                    width: "150px",
                    background: "#3B5998",
                    color: "#fff",
                    alignContent: "center",
                  }}
                  size={"large"}
                  icon={<icon-facebook />}
                  onClick={() => alert("Clicked facebook")}
                >
                  <IconFont type="icon-facebook" theme="outlined" /> Facebook
                </Button>
                <Button
                  style={{
                    borderRadius: "50px",
                    border: "1px solid #F14336",
                    width: "150px",
                    background: "transparent",
                    color: "#000",
                    alignContent: "center",
                    verticalAlign: "top",
                  }}
                  size={"large"}
                  icon={<MailOutlined />}
                  onClick={() => alert("Clicked facebook")}
                >
                  Gmail
                </Button>
              </div> */}
              <Button onClick={this.submitLogin} type="primary" block className="mt-3" size={"large"} style={{ borderRadius: "50px" }}>
                Sign In
              </Button>

              <Form.Item>
                <div className="col-md-12 mt-3 d-flex justify-content-center align-items-center">
                  <a className="login-form-forgot mr-3 " href="">
                    Not a member yet?
                  </a>
                  <Link to="/signup">
                    <Form.Item name="remember">Sign Up</Form.Item>
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
export default Login;
