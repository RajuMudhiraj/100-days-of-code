import React from 'react';
import Header from '../layouts/Header/Header'


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <>
        <Header className='header' />
      </>
    );
  }
}