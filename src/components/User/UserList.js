import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../../core/users";
import UserListItem from "./UserListItem";
import "./UserList.scss";
import { getClockTime } from "../../hooks";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";

export default function UserList({ selectedTimes, users, filteredIds }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const clickSelect = useCallback(
    async (e) => {
      const time = new Date().getTime();
      const id = e.target.id;
      try {
        const isSure = await modalRef.current.open();
        if (isSure) {
          dispatch(usersActions.toggleSelectUser(id, time));
        }
      } catch (err) {
        console.warn(err);
      }
    },
    [dispatch]
  );

  return (
    <>
      <ul className="col user-list__container">
        {filteredIds.map((userId) => {
          const user = users[userId];
          let time = null;
          const selectedTime = selectedTimes[userId];
          if (selectedTime) {
            const date = new Date(selectedTime);
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
      <ConfirmationPopup ref={modalRef} />
    </>
  );
}
