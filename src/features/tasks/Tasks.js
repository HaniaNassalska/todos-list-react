import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import useTask from "../../useTask";
import { useState } from "react";

function Tasks() {
    const {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    } = useTask();

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return (
        <Container>
            <Header title={"Lista zadań"} />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />} />

            <Section
                title="Lista zadań"
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone}
                    />
                }
                body={
                    <TasksList
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
            />
        </Container>
    );
}

export default Tasks;
