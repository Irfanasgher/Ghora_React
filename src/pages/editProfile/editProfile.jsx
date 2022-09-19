import React, { Component } from "react";
import { Button, Input, Checkbox } from "antd";
import { Menu,notification, message} from 'antd';
import { Link } from "react-router-dom";
import UploadImage from './uploadImage/uploadImage';
import auth from "../../services/authService";
import "./editProfile.scss";


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
function displayHide(){
  var x = document.getElementById("model");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const openNotification = () => {
  notification.success({
    message: 'Thank You',
    description:
      'Your Documents Updated We will email you soon',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

class EditProfile extends Component {
  state = {};
  logout = () => {
    auth.logout();
    window.location = "/login";
  };
  
  render() {
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
          Breeder
        </Menu.Item>
        <Menu.Item key="2">
          Owner
        </Menu.Item>
        <Menu.Item key="3">
          Transporter
        </Menu.Item>
        <Menu.Item key="4">
          Transporter
        </Menu.Item>
      </Menu>
    );
    return (
      <div id="profile">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-4 mt-5" style={{ borderRight: "1px solid blue" }}>
              <div className="row">
                <div className="col text-center">
                  <p>Profile</p>
                </div>
              </div>
              <div className="row">
                <div className="col text-center circle">
                  <div className="circle" />
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <h4>Azeem Aleem</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col text-center">
                  <h5>BREEDER</h5>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4 text-center" style={{ borderRight: "1px solid" }}>
                  <h4>
                    0.0
                    <br />
                    <span style={{ fontSize: "17px" }}>Posts</span>
                  </h4>
                </div>
                <div className="col-md-4 text-center" style={{ borderRight: "1px solid" }}>
                  <h4>
                    0.0
                    <br />
                    <span style={{ fontSize: "17px" }}>messages</span>
                  </h4>
                </div>
                <div className="col-md-4 text-center">
                  <h4>
                    0.0
                    <br />
                    <span style={{ fontSize: "17px" }}>members</span>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col buttons">
                  <button type="button" className="btn btn-primary mb-3">
                    Uplaod Photo
                  </button>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col buttons">
                  <button type="button" className="btn btn-light mb-3">
                    Delete
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <h4>BIOGRAPHY</h4>
                  <p>Lorem Ipsum is simply dummy text of thread.Lorem Ipsum is simply dummy text of thread.Lorem Ipsum is simply dummy text of thread.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-5 pt-4">
              <div className="col-12 d-flex justify-content-between">
                <div>
                  <p>Basic Info</p>
                </div>
                <div>
                  <Button> Cancel </Button>
                  <Link to="/profilepage">
                  <Button className="ml-3 mr-4" type="primary">
                    Save
                  </Button>
                  </Link>
                  <Button onClick={this.logout}> Logout </Button>
                </div>
              </div>
              <div className="row">
                <hr style={{ width: "95%", marginLeft: "2%" }} />
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <label>First Name</label>
                  <Input />
                </div>
                <div className="col-md-6">
                  <label>Last Name</label>
                  <Input />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <label>Email Address</label>
                  <Input />
                </div>
                <div className="col-md-6">
                  <label>Phone Number</label>
                  <Input />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <label>Street Address 1</label>
                  <Input />
                </div>
                <div className="col-md-6">
                  <label>Street Address 2</label>
                  <Input />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <label>Country</label>
                  <Input />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12 d-flex flex-column">
                  <h3>Select Your Profession</h3>
                  <Checkbox onClick={displayHide}>Breeder</Checkbox>

                  {/* Model Box  */}
                  <div id="model">
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <p><strong>Title</strong></p>
                       <Input placeholder="Enter the title" />

                      </div>
                    </div>
                <UploadImage/>
                <div className="row">
                  <div className="col-md-6" text-center></div>
                  <div className="col-md-6">
                  <Button danger style={{marginLeft:'1rem'}}>Cancel</Button>
                <Button type="primary" style={{marginLeft:'1rem'}} onClick={openNotification}>Update</Button>
                  </div>
                </div>
                

                  </div>
                  <Checkbox onChange={onChange}>Owner</Checkbox>
                  <Checkbox onClick={displayHide}>Transporter</Checkbox>
                  <Checkbox onChange={onChange}>Veterinarian</Checkbox>
                  <Checkbox onChange={onChange}>Insurance</Checkbox>
                  <Checkbox onChange={onChange}>Trainer (Center) </Checkbox>
                  <Checkbox onChange={onChange}>Trainer (Helper) </Checkbox>
                  <Checkbox onChange={onChange}>Shop </Checkbox>
                  <Checkbox onChange={onChange}>Others </Checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
