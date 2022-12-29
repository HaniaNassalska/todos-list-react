import styled from "styled-components"

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
 `;

export const Header = styled.header`
`;

export const Title = styled.h2`
    padding-left: 20px;
    padding-top: 18px;
    font-size: 20px;
    margin-top: 8px;
`;

export const DecorationalLine = styled.div`
    border-bottom: solid 1.5px #e8e8ee;
`;

export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.colors.white};
margin-bottom: 10px;
padding: 20px;
`;