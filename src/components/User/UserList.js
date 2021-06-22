import React from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../../core/users";
import UserListItem from "./UserListItem";
import "./UserList.scss";
import { getClockTime } from "../../hooks";

export default function UserList({ selectedTimes, users, filteredIds }) {
  const dispatch = useDispatch();

  const clickSelect = (e) => {
    const time = new Date().getTime();
    dispatch(usersActions.toggleSelectUser(e.target.id, time));
  };

  return (
    <ul className="col user-list__container">
      {filteredIds.map((userId) => {
        const user = users[userId];
        let time = null;
        const seelctedTime = selectedTimes[userId];
        if (seelctedTime) {
          const date = new Date(seelctedTime);
          time = getClockTime(date);
        }
        return (
          <UserListItem
            key={user.login.uuid}
            user={user}
            time={time}
            clickSelect={clickSelect}
            showButtons
          />
        );
      })}
    </ul>
  );
}
