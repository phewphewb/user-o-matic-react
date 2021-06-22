import { usersActions } from "./actions";

const initialState = {
  error: null,
  page: 0,
  users: {},
  userIds: [],
  selectedTimes: {},
  selectedIds: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActions.FETCH_USERS_FULFILLED: {
      const updatedUsers = { ...state.users };
      const updatedUserIds = [...state.userIds];
      action.payload.users.forEach((user) => {
        updatedUsers[user.login.uuid] = user;
        updatedUserIds.push(user.login.uuid);
      });
      return {
        ...state,
        users: updatedUsers,
        userIds: updatedUserIds,
        error: null,
        page: state.page + 1
      };
    }
    case usersActions.FETCH_USERS_FAILED:
      return { ...state, error: action.payload.error };
    case usersActions.TOGGLE_SELECT_USER:
      return toggleUserSelection(state, action.payload.id, action.payload.time);
    default:
      return state;
  }
};

function toggleUserSelection(state, toggleId, time) {
  const updatedSelectedTimes = { ...state.selectedTimes };
  let updatedSelectedIds = [...state.selectedIds];
  const found = state.selectedIds.find((id) => id === toggleId);
  if (found) {
    updatedSelectedIds = state.selectedIds.filter((id) => id !== toggleId);
    delete updatedSelectedTimes[toggleId];
  } else {
    updatedSelectedIds.push(toggleId);
    updatedSelectedTimes[toggleId] = time;
  }
  return { ...state, selectedIds: updatedSelectedIds, selectedTimes: updatedSelectedTimes };
}
