import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
background-color: ${props => props.bgColor};
color:rgb(255,255,255);
padding: 5px;
text-align: center;
border:1px solid black; 
border-radius: 5px;
margin:5px;
width:100px;
user-select: none;
list-style: none;
text-decoration: none;
height:50px;
font-size:1rem;

&:hover {
  background-color: ${props => props.bgHover};
  cursor:pointer;
  color:black;
}
`
const Button = (props) => {
 return (
    <Btn bgColor={props.bgColor} bgHover={props.bgHover}>
      {props.value}
    </Btn>
  );
}
export default Button
