import { Outlet, Link } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Footer from "../layouts/Footer";
import FlexBox from "../components/FlexBox"

const UserHome = () => {
  return (
    <>
      <FlexBox justifyContent="space-between" alignItems="center" bgColor="rgb(225, 231, 233)" padding="10px" innerText={<><Link to="/user"><Logo /></Link><FlexBox bgColor="inherit" innerText={<><Link to="/user/signOut" ><Button bgHover="rgb(90, 130, 100)" bgColor="rgb(91, 155, 125)" innerText="Sign Out" /></Link>
      </>} /></>}>

      </FlexBox>
      <div style={{display:"flex", direction:"row", justifyContent:"center", alignItems:"center", minHeight:"450px"}}>
        <Outlet />
      </div>

      <Footer />
    </>
  )
};

export default UserHome;

