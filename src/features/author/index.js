import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { TextContainer } from "./TextContainer/styled";

function AuthorPage() {

  return (
    <Container>
      <Header title={"O mnie"} />
      <Section
        title="Hania Nassalska" />
      <TextContainer>
        <>
          <p>Cześć!😊</p>
          <p>Dotychczas zawodowo związana byłam z organizacją pozarządową z branży IT. Początkowo pracowałam przy projektach z Europejskiego Funduszu Społecznego, które moja organizacja kierowała do osób z niepełnosprawnościami, celem nabywania umiejętności cyfrowych. </p>
          <p>Przez ostatnie lata zajmowałam się organizacją i zarządzaniem projektami IT skierowanymi do klientów biznesowych, głównie korporacyjnych.</p>
          <p>Zawsze chciałam poszerzyć swoją wiedzę o <em> tajniki </em> programowania, dlatego zapisałam się na kurs. Jeszcze nie wiem, gdzie mnie to zaprowadzi - sama jestem ciekawa. 😎</p>
        </>
      </TextContainer>
    </Container>
  );
}

export default AuthorPage;