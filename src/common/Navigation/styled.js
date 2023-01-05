import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
`;

export const NaviList = styled.ul`
  margin: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: start;
  }
`;