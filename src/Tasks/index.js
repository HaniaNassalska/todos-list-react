import { StyledList, StyledTask, StyledContent, StyledButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledTask 
            key={task.id}
            hidden={task.done && hideDone}
            >
                <StyledButton 
                togleDone
                onClick={() => toggleTaskDone(task.id)}> 
                {task.done ? "✔" : ""}
                </StyledButton>
                <StyledContent
                done={task.done}>
                {task.content}
                </StyledContent>
                <StyledButton 
                remove
                onClick={() => removeTask(task.id)}>
                    🗑
                </StyledButton>
            </StyledTask>
        ))}
    </StyledList>
);

export default Tasks;