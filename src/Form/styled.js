import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;


    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 10px;
   }
`
export const Input = styled.input`
   padding: 8px;
   margin: 15px 5px 20px 20px;
   border: solid 1px;

   @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
      margin: 20px 15px 0px;
   }
`

export const Button = styled.button`
   background-color: ${({theme})=> theme.colors.teal};
   color: ${({theme})=> theme.colors.white};
   padding: 8px;
   border: none;
   margin: 15px 20px 20px 5px;
   transition: 0.3s;
   cursor: pointer;

   &:hover{
      @media (min-width: ${({theme})=> theme.breakpoint.desktopMin}px) {
      transform: scale(1.05);
      background-color: ${({theme})=> theme.colors.lighterTeal};
      cursor: pointer;
   }     
   } 

  &:hover{
      @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
      background-color: ${({theme})=> theme.colors.lighterTeal};
    } 
   }

   @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
        margin: 0 15px 15px;
   }
`