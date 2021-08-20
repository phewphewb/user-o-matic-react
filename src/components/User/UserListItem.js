import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../UI/avatar/Avatar";
import Button from "../UI/button/Button";
import "./UserListItem.scss";

const areEqual = (prevProps, nextProps) => {
  const notSelected = !prevProps.time && !nextProps.time;
  const notToggled = prevProps.time === nextProps.time;
  if (notSelected || notToggled) {
    return true;
  }
  return false;
};

const UserListItem = React.memo(
  ({ user, time, linkToModal, linkToDetails, isSelected, clickSelect }) => {
    const { picture, name, login } = user;

    return (
      <li className="user-li__container" id={login.uuid}>
        <Avatar imageUrl={picture.thumbnail} />
        <div className="user-li__content">
          <Link className="user-li__title" to={linkToDetails}>
            <h4>
              {name.first}&nbsp;{name.last}
            </h4>
          </Link>
          <span className="text-secondary caption">{time}&nbsp;</span>
          <div className="user-li__btn-container">
            <Button
              id={login.uuid}
              onClick={clickSelect}
              title={isSelected ? "Deselect" : "Select"}
            />
            <Link to={linkToModal}>
              <Button title="Modal" />
            </Link>
          </div>
        </div>
      </li>
    );
  },
  areEqual
);
export default UserListItem;
