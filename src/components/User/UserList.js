import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../../core/users";
import UserListItem from "./UserListItem";
import "./UserList.scss";
import { getClockTime } from "../../hooks";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import { useLocation } from "react-router-dom";

export default function UserList({ selectedTimes, users, filteredIds }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const clickSelect = useCallback(
    (isSelected) => async (e) => {
      const time = new Date().getTime();
      const id = e.target.id;
      if (!isSelected) {
        dispatch(usersActions.toggleSelectUser(id, time));
        return;
      }
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
          const selectedTime = selectedTimes[userId];
          let time, isSelected = false;
          if (selectedTime) {
            const date = new Date(selectedTime);
            time = getClockTime(date);
            isSelected = true;
          }
          const linkToDetails = `/user/${user.login.uuid}`;
          const linkToModal = {
            pathname: linkToDetails,
            state: { background: location },
          };
          return (
            <UserListItem
              key={user.login.uuid}
              isSelected={isSelected}
              user={user}
              time={time}
              linkToModal={linkToModal}
              linkToDetails={linkToDetails}
              clickSelect={clickSelect(isSelected)}
            />
          );
        })}
      </ul>
      <ConfirmationPopup ref={modalRef} />
    </>
  );
}
