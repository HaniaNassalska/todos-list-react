import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTask } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exempleTasks = yield call(getExampleTasks);
    yield put(setTask(exempleTasks));
  }
  catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
const tasks = yield select(selectTasks);
yield call(saveTasksInLocalStorage, tasks)
}

export function* watchFetchExapleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler); 
}