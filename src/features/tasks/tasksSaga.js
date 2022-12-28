import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTask, fetchDownloadTaskSuccess, fetchDownloadingTasks} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./taskLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exempleTasks = yield call(getExampleTasks);
    yield put(fetchDownloadingTasks())
    yield delay(1000)
    yield put(setTask(exempleTasks))
    yield put(fetchDownloadTaskSuccess())
  }
  catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks)
}

export function* taskSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}