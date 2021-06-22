import React from "react";
import Avatar from "../UI/avatar/Avatar";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import "./UserListItem.scss";
import Button from "../UI/button/Button";

const UserListItem = React.memo(
  ({ user, time, showButtons, clickSelect }) => {
    const { picture, name, login } = user;
    const { path } = useRouteMatch();
    const location = useLocation();
    return (
      <li className="user-li__container" id={login.uuid}>
        <Avatar imageUrl={picture.thumbnail} />
        <div className="user-li__content">
          <Link className="user-li__title" to={path + `user/${login.uuid}`}>
            <h4>
              {name.first} {name.last}
            </h4>
          </Link>
          {showButtons && (
            <>
              <p className="text-secondary caption">{time} &nbsp;</p>
              <div className="user-li__btn-container">
                <Button
                  id={login.uuid}
                  onClick={clickSelect}
                  title={time ? "Deselect" : "Select"}
                />
                <Link
                  to={{
                    pathname: `/user/${login.uuid}`,
                    state: { background: location }
                  }}>
                  <Button title="Modal" />
                </Link>
              </div>
            </>
          )}
        </div>
      </li>
    );
  },
  (prevProps, nextProps) => {
    if (!prevProps.time && !nextProps.time) {
      return true;
    }
    return false;
  }
);
export default UserListItem;
