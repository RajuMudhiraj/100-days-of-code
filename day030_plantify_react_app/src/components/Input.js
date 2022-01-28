import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input.attrs(props => ({ type: props.type }))`
${'' /* width: ${props => props.width || "200px"}; */}
width:50%;
${'' /* margin:10px; */}
height:30px;

`

const Input = (props) => {



    return (
        <StyledInput onChange={props.onChange} type={props.type} placeholder={`${props.type.toUpperCase()}....`} />
    )
}

export default Input;