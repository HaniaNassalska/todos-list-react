import { takeLatest, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTask } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    const exempleTasks = yield call(getExampleTasks);
    yield put(setTask(exempleTasks));
  }
  catch (error) {
    yield call(alert, "Coś poszło nie tak");
  }
};

export function* watchFetchExapleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}