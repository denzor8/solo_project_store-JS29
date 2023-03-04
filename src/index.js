import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import 'macro-css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Context} from './contexts/Context'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
