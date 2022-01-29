import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Button from './components/Button';
import SignUp from "./components/SignUp";
import SignInForm from './layouts/SignInForm'
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
    return (
        <StyledApp>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage className="landingPage" />}>
                        <Route index element={<Button bgHover="rgb(88, 182, 119)" bgColor="rgb(168, 147, 121)" innerText="Plant1Tree" />} />
                        <Route path="signIn" element={<SignInForm />} />
                        <Route path="signUp" element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StyledApp>
    );
}

export default App;