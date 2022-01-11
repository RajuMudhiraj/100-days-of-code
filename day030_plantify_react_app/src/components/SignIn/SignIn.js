import React from 'react';
import './SignIn.css';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        This is SignIn component
      </div>
    );
  }
}
