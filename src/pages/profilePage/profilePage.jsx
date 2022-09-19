import React, { Component } from 'react';
import Navbar from "../common/navbar";
import UploadSection from "./uploadSection";
import PostSection from "./postSection";
import "./profilePage.scss";


class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <UploadSection/>
                <PostSection/>
            </React.Fragment>
         );
    }
}
 
export default Profile;