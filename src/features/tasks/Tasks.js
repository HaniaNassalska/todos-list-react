import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Search from "./Search";
import { Container } from "../../common/Container";
import DownloadTasksButton from "./DownloadTasksButton";

function Tasks() {

    return (
        <Container>
            <Header title={"Lista zadań"} />
            <Section
                title="Dodaj nowe zadanie"
                extraHeaderContent={<DownloadTasksButton />}
                body={<Form />}
            />
            <Section
                title="Wyszukiwarka"
                body={<Search />}
            />
            <Section
                title="Lista zadań"
                extraHeaderContent={<Buttons />}
                body={<TasksList />}
            />
        </Container>
    );
}

export default Tasks;
