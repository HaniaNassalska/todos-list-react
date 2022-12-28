import { StyledNavigation, NaviList, Navi } from "./styled";

const Navigation = ({ body }) => (
  <StyledNavigation>
    <NaviList>
      <Navi>
        {body}
      </Navi>
    </NaviList>
  </StyledNavigation>
)
export default Navigation;