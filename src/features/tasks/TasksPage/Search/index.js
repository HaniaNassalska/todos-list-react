import { StyledForm, Input } from "../Input/styled";
import { Wrapper } from "./styled";

const Search = () => (
  <Wrapper>
  <StyledForm>
    <Input
      placeholder="Filtruj zadania"
    />
  </StyledForm>
  </Wrapper>
);

export default Search;
