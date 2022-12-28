import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Task, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>
                    <Content
                        done={task.done}>
                        <Link to={`/zadania/${task.id}`}>
                            {task.content}
                        </Link>
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </RemoveButton>
                </Task>
            ))}
        </List>
    );

}
export default TasksList;