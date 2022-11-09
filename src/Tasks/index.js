import { List, Task, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Task 
            key={task.id}
            hidden={task.done && hideDone}
            >
                <Button 
                togleDone
                onClick={() => toggleTaskDone(task.id)}> 
                {task.done ? "✔" : ""}
                </Button>
                <Content
                done={task.done}>
                {task.content}
                </Content>
                <Button 
                remove
                onClick={() => removeTask(task.id)}>
                    🗑
                </Button>
            </Task>
        ))}
    </List>
);

export default Tasks;