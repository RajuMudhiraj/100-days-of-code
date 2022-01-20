import React from 'react'
import './SignIn.css'
import axios from 'axios'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: "" }

        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmailInput(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordInput(e) {
        this.setState({ password: e.target.value })
    }

    async handleSubmit() {
        const { email, password } = this.state;
        try {
            const response = await axios.get('https://plant1tree.herokuapp.com/');
            alert(response.data)
           console.log(response.data);
        } catch (err) {
          console.log(err)
          alert(err)

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                        onChange={this.handleEmailInput}
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
                        onChange={this.handlePasswordInput}
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
            </div>
        )
    }
}