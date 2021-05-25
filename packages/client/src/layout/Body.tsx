import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPopup from "../components/LoginPopup";
import HomePage from "../pages/HomePage";
import RoomPage from "../pages/RoomPage";

const Body = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/room">
            <RoomPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Body;
