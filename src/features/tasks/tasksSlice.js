import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./taskLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
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
    fetchExampleTasks: () => {
    },
    setTask: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    fetchDownloadTaskSuccess: state => {
      state.loading = false
    },
    fetchDownloadingTasks: state => {
      state.loading = true
    }
  },
});

export const {
  addTasks,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTask,
  fetchDownloadingTasks,
  fetchDownloadTaskSuccess
} = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectDownloadState = state => state.tasks.loading;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;