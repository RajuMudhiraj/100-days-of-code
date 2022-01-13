import React from 'react';
import './Logo.css';
import logo from '../../assets/Images/logo.jpg'


export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className='display-inline'>
        <img  className="logo" src={logo} alt="Logo"></img>
      </div>
    );
  }
}
