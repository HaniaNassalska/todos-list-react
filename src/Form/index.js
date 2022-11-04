import { StyledForm, StyledFromInput, StyledFormButton } from "./styled";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent === "") {
            return
        };
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFromInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <StyledFormButton
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie</StyledFormButton>
        </StyledForm>
    );
};

export default Form;