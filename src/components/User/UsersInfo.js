import React from "react";
import { useSelector } from "react-redux";

const UsersInfo = () => {
  const { userIds, selectedIds } = useSelector((state) => state.users);
  return (
    <div className="col">
      <span className="title">Loaded users:&nbsp;{`${userIds.length}`}</span>
      <span className="title">Selected users:&nbsp;{`${selectedIds.length}`}</span>
    </div>
  );
};

export default UsersInfo;
