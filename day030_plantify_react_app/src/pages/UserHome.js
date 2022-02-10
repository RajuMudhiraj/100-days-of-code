import { Outlet, useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../layouts/Footer";
import FlexBox from "../components/FlexBox"

const UserHome = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    sessionStorage.clear();
    navigate('/')

  }

  return (
    <>
      <FlexBox justifyContent="space-between" alignItems="center" bgColor="rgb(225, 231, 233)" padding="10px" innerText={<><Link to="/user"><p>User Home</p></Link><FlexBox bgColor="inherit" innerText={<><Link to="/" ><Button bgHover="rgb(90, 130, 100)" bgColor="rgb(91, 155, 125)" innerText="Sign Out" onClick={handleSignOut} /></Link>
      </>} /></>}>

      </FlexBox>
      <div style={{display:"flex", direction:"row", justifyContent:"center", alignItems:"center", minHeight:"500px"}}>
        <Outlet />
      </div>

      <Footer />
    </>
  )
};

export default UserHome;

