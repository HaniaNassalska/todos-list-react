import "./style.css";
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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <button
                className="form__button"
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie</button>
        </form>
    );
};

export default Form;