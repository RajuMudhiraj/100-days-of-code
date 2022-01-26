import React from 'react';
import './Button.css';

export default function Button(props){

    return (
      <div className={props.className}>
        {props.value}
      </div>
    );
  }
