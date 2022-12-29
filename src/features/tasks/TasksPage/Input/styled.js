import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 10px;
   }
`

export const Input = styled.input`
   padding: 8px;
   margin: 15px 5px 20px 20px;
   border: solid 2px;
   border-color: ${({ theme }) => theme.colors.gallery};

   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin: 20px 15px 0px;
   }
`