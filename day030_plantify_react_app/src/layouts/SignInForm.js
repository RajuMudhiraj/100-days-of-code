//-------------------- Imports -------------------------------------------
import React, { useState } from 'react'
// import axios from 'axios'
import styled from "styled-components"
import Input from '../components/Input'
import LabelText from '../components/LabelText'
import Button from '../components/Button'
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import axios from '../api/axios';



// --------------------- Styled components--------------------------------

const StyledFormContainer = styled.div`
display:flex;
flex-direction:column;
`
const Div = styled.div`
display:flex;
flex-direction:row;
margin:5px;
`

const LOGIN_URL = '/signIn';

const SignInForm = (props) => {
    // -------------------------------- Javascript -------------------------------------
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/user";

    let handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    let handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                { email, password }
            );

            const user = email;
            const pwd = password;
            const roles = [2001, 1984, 5150];
            const accessToken = response.data.token;
              
            setMessage("Auth success!")
            console.log(message, response)

            
            sessionStorage.setItem("token", `Bearer ${response.data.token}`)
            
            setAuth({ user, pwd, roles, accessToken});
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });



        }
        catch (err) {
            setMessage("Auth failed")
            console.log(err)
        }
    }

    // ------------------ JSX ---------------------------------------------
    return (
        <>
            <StyledFormContainer>
                <Div>
                    <LabelText text="Email :"></LabelText>
                    <Input type="email" onChange={handleEmailInput} fontSize="1em"></Input>
                </Div>
                <Div>
                    <LabelText text="Password :"></LabelText>
                    <Input type="password" onChange={handlePasswordInput} />
                </Div>
                <Div>
                    <LabelText ></LabelText>
                    <Button innerText="Sign In" bgColor="green" bgHover="lightgreen" onClick={handleSubmit} />
                </Div>
                <p>{message}</p>
            </StyledFormContainer>

        </>
    )
}

export default SignInForm;

