import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { Container } from "./Container/styled";
import useTask from "./useTask";
import { useState } from "react";

function App() {
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
                    <Tasks
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

export default App;
