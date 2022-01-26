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
          <Link to="/signIn" ><Button bgHover="rgb(90, 130, 100)" bgColor="rgb(91, 155, 125)" value="Sign In" /></Link>
          <Link to="/signUp" ><Button bgHover="rgb(130, 119, 175)" bgColor="rgb(150, 142, 182)" value="Sign Up" /></Link>
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

