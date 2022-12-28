import styled from "styled-components";

export const Button = styled.button`
   background-color: ${({ theme }) => theme.colors.teal};
   color: ${({ theme }) => theme.colors.white};
   padding: 8px;
   border: none;
   margin: 15px 20px 20px 5px;
   transition: 0.3s;
   cursor: pointer;

   &:hover{
      @media (min-width: ${({ theme }) => theme.breakpoint.desktopMin}px) {
      transform: scale(1.05);
      filter: brightness(120%);
      cursor: pointer;
      }     
   } 

  &:hover{
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
         filter: brightness(120%);
      } 
   }

   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 15px 15px;
   }
`