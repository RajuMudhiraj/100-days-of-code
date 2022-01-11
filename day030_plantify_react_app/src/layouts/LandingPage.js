import React from 'react';
import SignIn from '../components/SignIn/SignIn'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <>
      <SignIn />
        This is LandingPage layout
      </>
    );
  }
}