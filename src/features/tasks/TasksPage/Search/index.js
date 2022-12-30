import { StyledForm, Input } from "../Input/styled";
import { useReplaceQuaryParameter, useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQuaryParameter = useReplaceQuaryParameter();

  const onInputChange = ({ target }) => {
    replaceQuaryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    })
  };

  return (
    <Wrapper>
      <StyledForm>
        <Input
          placeholder="Filtruj zadania"
          value={query || ""}
          onChange={onInputChange}
        />
      </StyledForm>
    </Wrapper>
  )
};

export default Search;
