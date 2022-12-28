import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "../TasksPage/Search";
import { Container } from "../../../common/Container/styled";
import DownloadTasksButton from "../TasksPage/DownloadTasksButton";

function TasksPage() {

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

export default TasksPage;
