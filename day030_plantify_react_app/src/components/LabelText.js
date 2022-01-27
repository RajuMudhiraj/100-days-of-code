import styled from "styled-components";

const StyledLabelText = styled.p`
text-align:right;
width:30%;
margin:10px;
`
const LabelText = (props) => {
    return (
        <StyledLabelText>{props.text}</StyledLabelText>
    )
}

export default LabelText;