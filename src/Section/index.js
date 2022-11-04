import { 
    StyledSection, 
    StyledSectionHeader, 
    StyledSectionTitle, 
    StyledSectionButtons, 
    StyledSectionDecorationalLine, 
    StyledSectionListOfTasks 
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledSectionHeader>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledSectionButtons>{extraHeaderContent}</StyledSectionButtons>
        </StyledSectionHeader>
        <StyledSectionDecorationalLine></StyledSectionDecorationalLine>
        <StyledSectionListOfTasks>{body}</StyledSectionListOfTasks>
    </StyledSection>
);

export default Section;