import { StyledNavigation, NaviList } from "./styled";

const Navigation = ({ body }) => (
  <StyledNavigation>
    <NaviList>
      {body}
    </NaviList>
  </StyledNavigation>
)
export default Navigation;