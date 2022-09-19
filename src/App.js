import React, { Component } from "react";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Router />
      </React.Fragment>
    );
  }
}
export default App;
