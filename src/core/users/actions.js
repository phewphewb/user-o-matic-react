export const usersActions = {
  FETCH_USERS_PENDING: "FETCH_USERS_PENDING",
  FETCH_USERS_FULFILLED: "FETCH_USERS_FULFILLED",
  FETCH_USERS_FAILED: "FETCH_USERS_FAILED",

  LOAD_USERS: "LOAD_USERS",
  LOAD_NEXT_PAGE: "LOAD_NEXT_PAGE",

  TOGGLE_SELECT_USER: "TOGGLE_SELECT_USER",

  fetchUsersPending: () => ({
    type: usersActions.FETCH_USERS_PENDING
  }),
  fetchUsersFulfilled: (_, users) => ({
    type: usersActions.FETCH_USERS_FULFILLED,
    payload: { users }
  }),
  fetchUsersFailed: (message) => ({
    type: usersActions.FETCH_USERS_FAILED,
    payload: {
      message
    }
  }),

  loadUsers: (page) => ({
    type: usersActions.LOAD_USERS,
    payload: { page }
  }),
  loadNextPage: () => ({
    type: usersActions.LOAD_NEXT_PAGE
  }),

  toggleSelectUser: (id, time) => ({
    type: usersActions.TOGGLE_SELECT_USER,
    payload: {
      id,
      time
    }
  })
};

export const usersRequestActions = {
  fulfilled: usersActions.fetchUsersFulfilled,
  pending: usersActions.fetchUsersPending,
  failed: usersActions.fetchUsersFailed
};
