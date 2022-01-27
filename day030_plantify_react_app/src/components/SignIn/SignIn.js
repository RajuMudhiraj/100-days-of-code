import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'


export default function SignIn(props) {

    // -------------------------------- Javascript -------------------------------------
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")

    let handleEmailInput = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    let handlePasswordInput = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        // const { email, password } = this.state;
        try {
            const response = await axios.post('https://plant1tree.herokuapp.com/signIn/', { email, password })

            if (response.status >= 200 && response.status < 300) {
                sessionStorage.setItem("token", `Bearer ${response.data.token}`)
                setMessage("Auth success!")
                console.log(message)

                // history.push('/UserHome')
            }
        }
        catch (err) {
            setMessage("Auth failed")
            console.log(message)
        }
    }


    // -------------------------------- JSX -----------------------------------------
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label
                    className='label'
                    htmlFor='email'
                >
                    User Name:
                    </label>
                <input
                    id="email"
                    type='text'
                    className='input'
                    placeholder="User Name"
                    onChange={handleEmailInput}
                >
                </input>
                <br />
                <label
                    className='label'
                    htmlFor='password'
                >
                    Password:
                    </label>
                <input
                    id="password"
                    type='password'
                    className='input'
                    placeholder="Password"
                    onChange={handlePasswordInput}
                >
                </input>
                <br />
                <label
                    className='label'
                >
                </label>
                <button
                    type="submit"
                    style={{ fontSize: '1.2rem', padding: '5px' }}
                >
                    Sign In
                    </button>
            </form>
            <p>{message}</p>
        </div>
    )
}
