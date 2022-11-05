import styled from "styled-components";

export const SytyledContainer = styled.main`
    margin: 0 auto;
    max-width: 900px;

@media (max-width: ${(props)=> props.theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
    max-width: 90%;
};
`