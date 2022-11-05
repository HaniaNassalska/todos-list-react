import styled from "styled-components";

export const StyledButtons = styled.button`
background-color: transparent;
border: none;
color: ${(props)=> props.theme.colors.teal};
transition: 0.3s;
padding-top: 12px;

&:hover {
    color: ${(props)=> props.theme.colors.lighterTeal};
    cursor: pointer;
};

&:disabled {
    background-color: transparent;
    border: none;
    color: rgb(79, 79, 79);
    cursor: default;
}
`