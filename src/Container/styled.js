import styled from "styled-components";

export const SytyledContainer = styled.main`
    margin: 0 auto;
    max-width: 900px;

@media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
    max-width: 90%;
};
`