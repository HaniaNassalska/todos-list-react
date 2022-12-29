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