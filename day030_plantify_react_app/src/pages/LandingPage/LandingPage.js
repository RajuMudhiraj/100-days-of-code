import React from 'react';
import Header from '../../layouts/Header/Header'
import Body from '../../layouts/Body/Body'
import Footer from '../../layouts/Footer/Footer'
import './LandingPage.css'


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className='landingPage'>
        <Header className='header' />
        <Body />
        <Footer />

      </div>
    );
  }
}