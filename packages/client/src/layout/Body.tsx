import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { globalJwtContext } from "../App";
import HomePage from "../pages/HomePage";
import RoomPage from "../pages/RoomPage";

const Body = () => {
  const { user, setUser } = useContext(globalJwtContext);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {user ? (
            <Route path="/room/:gameId">
              <RoomPage />
            </Route>
          ) : null}
        </Switch>
      </Router>
    </>
  );
};

export default Body;
