import { useContext } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Button from './components/Button';
import SignUp from "./components/SignUp";
import SignInForm from './layouts/SignInForm'
import UserHome from './pages/UserHome'
import UserWelcome from './components/UserWelcome'
import UnAuthorized from './components/UnAuthorized';
import Missing from './components/Missing'
import RequireAuth from './components/RequireAuth'
import AuthContext from './context/AuthProvider'

import styled from "styled-components";

// ------------------- Styled Components --------------------------------
const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150
}

function App() {
    let { auth, setAuth } = useContext(AuthContext)
    // console.log(auth)
    return (
        <StyledApp>
            <Routes>
                {/* public routes */}

                <Route path="/" element={<LandingPage />}>
                    <Route index element={<Button bgHover="rgb(88, 182, 119)" bgColor="rgb(168, 147, 121)" innerText="Plant1Tree" />} />
                    <Route path="signIn" element={<SignInForm />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="unAuthorized" element={<UnAuthorized />} />
                    <Route path="*" element={<Missing />} />
                </Route>

                {/* public routes */}

                <Route element={<RequireAuth allowedRoles={[ROLES.User]} />} >
                <Route path="/user" element={<UserHome />}>
                    <Route index element={<UserWelcome />} />
                </Route>
                </Route>
            </Routes>

        </StyledApp>
    );
}

export default App;