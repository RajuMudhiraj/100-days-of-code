import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Button from './components/Button';
import SignUp from "./components/SignUp";
import SignInForm from './layouts/SignInForm'
import UserHome from './pages/UserHome'
import SignOut from './components/SignOut'
import UserWelcome from './components/UserWelcome'


import styled from "styled-components";


// ------------------- Styled Components --------------------------------
const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`


function App() {
    

const handleSignOut = () => {

}

    return (
        <StyledApp>
            <Routes>
                <Route path="/" element={<LandingPage />}>
                    <Route index element={<Button bgHover="rgb(88, 182, 119)" bgColor="rgb(168, 147, 121)" innerText="Plant1Tree" />} />
                    <Route path="signIn" element={<SignInForm />} />
                    <Route path="signUp" element={<SignUp />} />
                </Route>
                <Route path="/user" element={<UserHome />}>
                    <Route index element={<UserWelcome />} />
                    <Route path="signOut" element={<SignOut onClick={handleSignOut}/>} />
                </Route>
            </Routes>

        </StyledApp>
    );
}

export default App;