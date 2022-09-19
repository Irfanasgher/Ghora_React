import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/editProfile/editProfile";
import ProfilePage from "./pages/profilePage/profilePage";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoutes path="/profile" component={Profile} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/profilepage" component={ProfilePage}/>
      <Redirect from="/" to="/profile" />
      <Redirect to="/not-found" />
    </Switch>
  );
};
export default Router;
