import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="taskList section__listOfTasks">
        {tasks.map(task => (
            <li key={task.id} 
            className={`taskList__item ${task.done && hideDone ? " taskList__hiddenTasks" : ""}`}>
                <button className={'button__done'}> {task.done ? "✔" : ""}</button>
                <span className={`${task.done ? "taskList_content--done" : ""}`}  >{task.content}</span>
                <button className="button__remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;