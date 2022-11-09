import { 
    StyledSection, 
    Header,
    Title, 
    Buttons, 
    DecorationalLine, 
    ListOfTasks 
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            <Buttons>{extraHeaderContent}</Buttons>
        </Header>
        <DecorationalLine></DecorationalLine>
        <ListOfTasks>{body}</ListOfTasks>
    </StyledSection>
);

export default Section;