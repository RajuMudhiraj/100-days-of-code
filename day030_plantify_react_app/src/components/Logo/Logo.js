import React from 'react';
import './Logo.css';
import logo from '../../assets/Images/logo.jpg'


export default function Logo (props) {

    return (
      <div className='display-inline logo'>
        <img  className="logo" src={logo} alt="Logo"></img>
      </div>
    );
  }
