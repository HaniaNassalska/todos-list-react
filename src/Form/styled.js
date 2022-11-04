import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;


    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 10px;
   }
`
export const StyledFromInput = styled.input`
   padding: 8px;
   margin: 15px 5px 20px 20px;
   border: solid 1px;

   @media (max-width: 768px) {
      margin: 20px 15px 0px;
   }
`

export const StyledFormButton = styled.button`
   background-color: #007380;
   color: white;
   padding: 8px;
   border: none;
   margin: 15px 20px 20px 5px;
   transition: 0.3s;
   cursor: pointer;

   &:hover{
      @media (min-width: 768px) {
      transform: scale(1.05);
      background-color: #52b5c0;
      cursor: pointer;
   }     
   } 

  &:hover{
      @media (max-width: 768px) {
      background-color: #448c94;
  } 
   }

   @media (max-width: 768px) {
        margin: 0 15px 15px;
   }
`