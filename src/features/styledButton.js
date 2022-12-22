import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.teal};
  transition: 0.3s;
  padding-top: 12px;

&:hover {
  filter: brightness(110%);
  cursor: pointer;
};

&:disabled {
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  cursor: default;
}
`