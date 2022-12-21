import { all } from "redux-saga/effects";
import { watchFetchExapleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([
    watchFetchExapleTasks(),
  ]);
}  