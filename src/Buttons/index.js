import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="section__buttons">
            <button className="buttons__hideDone">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__completeAllTasks"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;