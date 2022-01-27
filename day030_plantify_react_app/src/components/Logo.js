import React from 'react';
import logo from '../assets/Images/logo.jpg'
import styled from 'styled-components';

const ImgLink = styled.img.attrs(({ src }) => ({
  src:  logo 
}))`
height: 100px;
width:100px;
margin-left: 10px;
border-radius: 50%;

&:hover {
  cursor:pointer;
}
`


export default function Logo (props) {

    return (
      <ImgLink />
    );
  }
