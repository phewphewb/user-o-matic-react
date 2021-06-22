import { call, put } from "@redux-saga/core/effects";
import { usersRequestActions } from "../users/actions";
import { api } from "./api";

function* fetchEntities(apiFunction, actions, id, param) {
  try {
    yield put(actions.pending(id));
    const data = yield call(apiFunction, param || id);
    yield put(actions.fulfilled(id, data));
  } catch (error) {
    yield put(actions.failed(error));
  }
}

export const fetchUsers = fetchEntities.bind(null, api.fetchUsers, usersRequestActions);
