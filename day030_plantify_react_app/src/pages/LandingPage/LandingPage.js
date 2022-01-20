import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Footer from "../../layouts/Footer/Footer";
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      < div className="landingPage">
        <div>
          <Link to="/"><Logo /></Link>
        </div>
        <div className="landingPage">
          <Link to="/signIn" style={{textDecoration:'none'}}><Button className="signInBtn"  value="Sign In" /></Link>
          <Link to="/signUp" style={{textDecoration:'none'}}><Button className="signUpBtn" value="Sign Up" /></Link>
        </div>
      </div>
      <div className="outLet">
        <Outlet />
      </div>
      <Footer />
    </>
  )
};

export default LandingPage;

