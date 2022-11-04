import { StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div>
            <StyledButtons
                onClick={toggleHideDone}
                >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </StyledButtons>
            <StyledButtons
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButtons>
        </div>
    )
);

export default Buttons;