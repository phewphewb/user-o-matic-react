import React from "react";
import Button from "../button/Button";

import "./Tab.scss";

const Tab = ({ title, loading, children, onLoadMore }) => {
  return (
    <div className="tab">
      <h3 className="subtitle">{title}</h3>
      {children}
      {onLoadMore && (
        <div className="tab__load-more">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Button ref={null} title={"Load more"} onClick={onLoadMore} />
          )}
        </div>
      )}
    </div>
  );
};

export default Tab;
