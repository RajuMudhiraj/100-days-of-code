import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Logo from './components/Logo/Logo';
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import Footer from './layouts/Footer/Footer';
import Button from './components/Button/Button';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage className="landingPage"/>}>
          <Route index element={<Button className="plant1TreeBtn" value="Plant1Tree" />} />
          <Route path="signIn" element={<Button className='signInBtn' value="Sign In" />} />
          <Route path="signUp" element={<Button className='signUpBtn' value="Sign Up" />} />
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
