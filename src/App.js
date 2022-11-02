import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState, useEffect } from "react";


function App() {
    const previousTasksList = JSON.parse(localStorage.getItem("tasks"));

    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState(
        (
            previousTasksList ? previousTasksList : []
        ));

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    }

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    }

    const addNewTask = (content) => {
        setTasks(task => [
            ...tasks,
            {
                content,
                done: false,
                id: task.length ? task[task.length - 1].id + 1 : 1,
            },
        ]);
    }

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
