import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Footer from "../../layouts/Footer/Footer";
import './UserHome.css'

const UserHome = () => {
  return (
    <>
      < div className="userHome">
        <div>
          <Link to="/"><Logo /></Link>
        </div>
        <div className="userHome">
          <Link to="/LandingPage" style={{textDecoration:'none'}}><Button className="signOutBtn"  value="Sign Out" /></Link>
        </div>
      </div>
      <div className="outLet">
        <Outlet />
      </div>
      <Footer />
    </>
  )
};

export default UserHome;

