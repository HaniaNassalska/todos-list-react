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
    color: white;
    border: none;
    transition: 0.3s;

    ${({togleDone}) => togleDone && css`
    background: #1b7c1f;

    &:hover{
        background: #1e9f22;
        cursor: pointer;
    }
    `}

    ${({remove}) => remove && css`
    background: #ec293d;

    &:hover{
        background: #fe4659;
        cursor: pointer;
    }
    `}    
`
