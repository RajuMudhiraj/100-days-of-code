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

                <div className='wrapper'>
                <Button className='' value='Sign In'/>
                <Button className="" value='Sign Up'/>
                </div>

            </div>
        )
    }

}