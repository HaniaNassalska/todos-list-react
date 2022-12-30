import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectTaskByQuery, selectHideDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Task, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TasksList = () => {
const location = useLocation();
const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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