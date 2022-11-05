import styled from "styled-components"

export const StyledSection = styled.section`
    background-color: ${({theme})=> theme.colors.white};
    margin-bottom: 1px;
`

export const StyledSectionHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3;


    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 200px 1fr;
        grid-template-rows: 4;
    }
`

export const StyledSectionTitle = styled.h2`
    padding-left: 20px;
    padding-top: 18px;
    font-size: 20px;
    margin-top: 8px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
`

export const StyledSectionButtons = styled.span`
    padding: 20px;
    grid-column: 3/4;
    grid-row-start: 1;
    justify-content: end;
    align-content: end;

    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
`
export const StyledSectionDecorationalLine = styled.div`
    border-bottom: solid 1.5px #e8e8ee;
    grid-column-start: 1;
    grid-column-end: 4;
`

export const StyledSectionListOfTasks = styled.div`
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 4;
`