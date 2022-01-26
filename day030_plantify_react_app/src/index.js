import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Button from './components/Button/Button';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage className="landingPage" />}>
          <Route index element={<Button className="plant1TreeBtn" value="Plant1Tree" />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
