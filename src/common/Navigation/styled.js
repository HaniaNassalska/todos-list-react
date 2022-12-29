import styled from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
`

export const NaviList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: start;
  }
`

export const Navi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 50px;
    padding: 20px;;
  }
`