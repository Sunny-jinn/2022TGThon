import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import LoginPage from "../src/components/pages/LoginPage";
import RegisterationPage from "../src/components/pages/RegisterationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/pages/Test";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/registeration" element={<RegisterationPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
