import React from 'react';
import './Header.css'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'

export default function Header(props) {
    // constructor(props) {
    //     super(props);

    // }

    // render() {
        return (
            <div className={props.className}>
                <Logo />

                <div className='wrapper'>
                <Button className='' value='Sign In'/>
                <Button className="" value='Sign Up'/>
                </div>

            </div>
        )
    }

// }