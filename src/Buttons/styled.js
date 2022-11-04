import styled from "styled-components";

export const StyledButtons = styled.button`
background-color: transparent;
border: none;
color: #007380;
transition: 0.3s;
padding-top: 12px;
&:hover {
    color: #52b5c0;
    cursor: pointer;
};
&:disabled {
    background-color: transparent;
    border: none;
    color: rgb(79, 79, 79);
    cursor: default;
}
`