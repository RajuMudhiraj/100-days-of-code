//-------------------- Imports -------------------------------------------
import React, { useState } from 'react'
import axios from 'axios'
import styled from "styled-components"
import Input from '../components/Input'
import LabelText from '../components/LabelText'
import Button from '../components/Button'


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

const SignInForm = (props) => {
    // -------------------------------- Javascript -------------------------------------
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")

    let handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    let handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://plant1tree.herokuapp.com/signIn/', { email, password })

            if (response.status >= 200 && response.status < 300) {
                sessionStorage.setItem("token", `Bearer ${response.data.token}`)
                setMessage("Auth success!")

            }

        }
        catch (err) {
            setMessage("Auth failed")
        }
    }

    // ------------------ JSX ---------------------------------------------
    return (
        <>
            <StyledFormContainer>
                <Div>
                    <LabelText text="Email :"></LabelText>
                    <Input type="email" onChange={handleEmailInput}></Input>
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

