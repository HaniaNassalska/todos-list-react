import { List, Task, Content, ToggleDoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Task 
            key={task.id}
            hidden={task.done && hideDone}
            >
                <ToggleDoneButton 
                onClick={() => toggleTaskDone(task.id)}> 
                {task.done ? "✔" : ""}
                </ToggleDoneButton>
                <Content
                done={task.done}>
                {task.content}
                </Content>
                <RemoveButton                 
                onClick={() => removeTask(task.id)}>
                    🗑
                </RemoveButton>
            </Task>
        ))}
    </List>
);

export default Tasks;