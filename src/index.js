import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux"; // importing provider component

import "./index.css";
import App from "./App";
import store from "./store/store"; // imprting our store that we created

// provider component is wrapping the App component
// our store is passed as a value to the (store) prop of the Provider component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
