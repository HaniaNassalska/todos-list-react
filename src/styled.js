import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
 activeClassName,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &.${activeClassName} {
    font-weight: bold
  }
`;

export const NaviItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 50px;
    padding: 20px;;
  }
`;