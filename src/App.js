import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import useTask from "./useTask";
import theme from "./theme";
import { useState } from "react";
import {ThemeProvider} from "styled-components";

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
        <ThemeProvider
        theme={theme}
        >
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
        </ThemeProvider>
    );
}

export default App;
