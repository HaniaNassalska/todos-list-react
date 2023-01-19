import { DecorationalLine, Header, StyledSection, Title, Wrapper } from "./styled";


const TaskPageSection = ({ title, body }) => (
  <StyledSection>
      <Header>
          <Title>{title}</Title>
               </Header>
      <DecorationalLine></DecorationalLine>
      <Wrapper>{body}</Wrapper>
  </StyledSection>
);

export default TaskPageSection;