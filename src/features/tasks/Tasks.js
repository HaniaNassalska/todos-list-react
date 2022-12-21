import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import SearchEngine from "./SearchEngine";
import { Container } from "../../common/Container/styled";
import DownloadTasksButton from "./DownloadTasksButton";

function Tasks() {

    return (
        <Container>
            <Header title={"Lista zadań"} />
            <Section
                title="Dodaj nowe zadanie"
                extraHeaderContent={
                    <DownloadTasksButton 
                    title={"Dodaj przykładowe zadania"} />
                }
                body={<Form />}
            />
            <Section
                title="Wyszukiwarka"
                body={<SearchEngine />} 
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
