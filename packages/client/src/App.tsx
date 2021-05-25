import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Page from "./layout/Page";
import store from "./store/store";
require("dotenv").config();

function App() {
  return (
    <>
      <Provider store={store}>
        <Page />
      </Provider>
    </>
  );
}

export default App;
