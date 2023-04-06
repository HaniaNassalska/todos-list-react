import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &.active {
    font-weight: bold
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  };
`;

export const NaviItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 50px;
    padding: 20px;
    grid-template-columns: auto;
  }
`;