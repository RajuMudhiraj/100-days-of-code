import React from 'react';
import './Header.css'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={this.props.className}>
                <Logo />
                <Button className='signUpBtn display-inline float-right' value='Sign Up'/>
                <Button className='signInBtn display-inline float-right' value='Sign In'/>
            </div>
        )
    }

}