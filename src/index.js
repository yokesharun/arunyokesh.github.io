import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import AppDev from "./AppDev";
import Nav from "./Nav";
import BottomNav from "./BottomNav";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Nav />
      <AppDev />
      <BottomNav />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
