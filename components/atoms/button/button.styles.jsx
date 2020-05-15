import styled from "styled-components"

const buttonBackground = props => {
    if(!props.variant) return props.theme.primary
   let colour = props.theme.primary
    switch(props.variant) {
        case "primary" :
            colour = props.theme.primary
            break
        case "secondary" :
            colour = props.theme.secoundary
            break
        case "tertiary" :
            colour = props.theme.tertiary
            break
        default :
            colour = props.theme.tertiary
            break
    }
    return colour

}

const StyledButton = styled.button`
    display: inline-block;
    padding: 16px;
    background-color: ${props => buttonBackground(props)};
    border: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	color: ${props => props.theme.white};
	cursor: pointer;
	font-weight: 700;
	line-height: 1;
	outline: none;
	text-decoration: none;
	transition: all 0.15s ease;
	white-space: nowrap;
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })`
    background-color: ${props => props.theme.secondary}
`

export default StyledButton

