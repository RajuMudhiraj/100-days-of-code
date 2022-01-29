import styled from "styled-components";

const StyledFlexBox = styled.div`
display:flex;
direction:${props => props.direction || "row"};
justify-content: ${props => props.justifyContent || "space-around"};
align-items:${props => props.alignItems || "center"};
background-color:${props => props.bgColor || "white"} ;
padding:${props => props.padding || "5px"} ;
min-height:${props => props.minHeight} ;
`

const FlexBox = (props) => {

    return(
        <StyledFlexBox direction={props.direction} justifyContent={props.justifyContent} alignItems={props.alignItems} bgColor={props.bgColor} minHeight={props.minHeight} padding={props.padding}>
        {props.innerText}        
        </StyledFlexBox>
    )
}

export default FlexBox;