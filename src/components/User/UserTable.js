import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../core/users";
import { useSearch } from "../../hooks";
import Input from "../UI/input/Input";
import Tab from "../UI/tab/Tab";
import UserList from "./UserList";
import "./UserTable.scss";

const filterWithSearch = (ids, users, search) => {
  const searchString = search.trim().toLowerCase();
  if (searchString === "") {
    return ids;
  } else {
    return ids.filter((userId) => {
      const user = users[userId];
      return (
        user.name.first.toLowerCase().indexOf(searchString) !== -1 ||
        user.name.last.toLowerCase().indexOf(searchString) !== -1
      );
    });
  }
};

const UserTable = () => {
  const dispatch = useDispatch();
  const { search, handleSearchChange } = useSearch();
  const { users, userIds, selectedIds, selectedTimes } = useSelector(
    (state) => state.users
  );

  const filteredUsers = useMemo(() => {
    return filterWithSearch(userIds, users, search);
  }, [search, users, userIds]);

  const filteredSelectedUsers = useMemo(() => {
    return filterWithSearch(selectedIds, users, search);
  }, [search, users, selectedIds]);

  const clickLoadMore = () => {
    dispatch(usersActions.loadNextPage());
  };

  // initial load
  useEffect(() => {
    dispatch(usersActions.loadUsers(1));
  }, [dispatch]);

  return (
    <div className="col user-table__container">
      <div>
        <Input placeholder="Search" onChange={handleSearchChange} />
      </div>
      <div className="row">
        <Tab onLoadMore={clickLoadMore} title="All users">
          <UserList
            selectedTimes={selectedTimes}
            users={users}
            filteredIds={filteredUsers}
          />
        </Tab>
        <Tab title="Selected users">
          <UserList
            selectedTimes={selectedTimes}
            users={users}
            filteredIds={filteredSelectedUsers}
          />
        </Tab>
      </div>
    </div>
  );
};

export default UserTable;
