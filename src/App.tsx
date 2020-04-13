import React from "react";
import { Provider } from "react-redux";

import Main from "./pages/Main";
import Store from "./stores/store";

import "./App.css";

function App() {
  return (
    // <Provider store={Store}>
    <Main />
    // </Provider>
  );
}

export default App;
