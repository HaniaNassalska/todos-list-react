import styled, {css} from "styled-components"

export const List = styled.ul`
    list-style: none;
    padding: 15px;
`

export const Task = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: solid 1.5px #e8e8ee;

    ${({hidden}) => hidden && css`
    display: none
    `}
`

export const Content = styled.span`
    ${({done}) => done && css`
    text-decoration: line-through
    `}
`
export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: ${({theme})=> theme.colors.white};
    border: none;
    transition: 0.3s;
`

export const ToggleDoneButton = styled(Button)`
    background: ${({theme})=> theme.colors.forestGreen};

    &:hover{
        filter: brightness(120%);
        cursor: pointer;
    }
`

export const RemoveButton = styled(Button)`
    background: ${({theme})=> theme.colors.crimson};

    &:hover{
        filter: brightness(120%);
        cursor: pointer;
    }
  `