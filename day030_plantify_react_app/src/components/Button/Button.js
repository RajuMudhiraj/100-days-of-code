import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.value}
      </div>
    );
  }
}
