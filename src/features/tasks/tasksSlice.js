import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },

        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => { task.done = true });
        },
        fetchExapleTasks: () => { },
    },
});

export const { 
    addTasks, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllDone,
    fetchExapleTasks 
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;