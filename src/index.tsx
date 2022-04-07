import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

import "./styles/globals.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
