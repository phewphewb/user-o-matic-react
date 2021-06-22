import { call, fork, select, takeLatest, takeLeading } from "redux-saga/effects";
import { fetchUsers } from "../api";
import { usersActions } from "./actions";

function* loadUsers({ payload }) {
  const { userIds } = yield select((state) => state.users);
  if (!userIds.length) {
    const { page } = payload;
    yield call(fetchUsers, page);
  }
}

function* loadNextPage() {
  const { page } = yield select((state) => state.users);
  yield call(fetchUsers, page);
}

function* watchLoadUsers() {
  yield takeLeading(usersActions.LOAD_USERS, loadUsers);
}
function* watchLoadNextPage() {
  yield takeLatest(usersActions.LOAD_NEXT_PAGE, loadNextPage);
}

export const userSagas = [fork(watchLoadUsers), fork(watchLoadNextPage)];
