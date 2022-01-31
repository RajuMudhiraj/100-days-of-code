import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input.attrs(props => ({ type: props.type }))`
width: ${props => props.width || "300px"};
font-size: ${props => props.fontSize || "1em"};;
height:30px;

`

const Input = (props) => {



    return (
        <StyledInput onChange={props.onChange} type={props.type} placeholder={`${props.type.toUpperCase()}....`} fontSize={props.fontSize} />
    )
}

export default Input;