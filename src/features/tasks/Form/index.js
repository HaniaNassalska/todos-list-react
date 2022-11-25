import { StyledForm, Input, Button } from "./styled";
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
            <Input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;