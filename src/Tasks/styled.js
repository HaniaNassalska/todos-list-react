import styled, {css} from "styled-components"

export const StyledList = styled.ul`
    list-style: none;
    padding: 15px;
`

export const StyledTask = styled.li`
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

export const StyledContent = styled.span`
    ${({done}) => done && css`
    text-decoration: line-through
    `}
`
export const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    color: ${({theme})=> theme.colors.white};
    border: none;
    transition: 0.3s;

    ${({togleDone}) => togleDone && css`
    background: ${({theme})=> theme.colors.green};

    &:hover{
        background: ${({theme})=> theme.colors.lighterGreen};
        cursor: pointer;
    }
    `}

    ${({remove}) => remove && css`
    background: ${({theme})=> theme.colors.red};

    &:hover{
        background: ${({theme})=> theme.colors.lighterRed};;
        cursor: pointer;
    }
    `}    
`
