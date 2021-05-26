import React, { useMemo, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Page from "./layout/Page";
import { sendMessage } from "./services/socket";
import store from "./store/store";
require("dotenv").config();

const globalJwt = null;
export const globalJwtContext = React.createContext(globalJwt);
export const gameContext = React.createContext(null);
function App() {
  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [game, setGame] = useState(null);
  const gameValue = useMemo(() => ({ game, setGame }), [game, setGame]);
  return (
    <>
      <globalJwtContext.Provider value={userValue}>
        <gameContext.Provider value={gameValue}>
          <Provider store={store}>
            <Page />
          </Provider>
        </gameContext.Provider>
      </globalJwtContext.Provider>
    </>
  );
}

export default App;
