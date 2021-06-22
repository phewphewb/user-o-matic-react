import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Avatar from "../UI/avatar/Avatar";
import "./UserDetails.scss";

const Row = ({ title, value, children }) => (
  <div className="row">
    <span className="user-details__title">{title}</span>
    <span className="user-details__value">
      {value}
      {children}
    </span>
  </div>
);

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users[id];

  if (!user) return <p>Not found</p>;
  const { picture, name, email, cell, location, dob, gender } = user;
  return (
    <div className="col user-details__container">
      <Avatar imageUrl={picture.thumbnail} />
      <h2 className="user-details__header">{`${name.first} ${name.last}`}</h2>
      <div className="col">
        <Row title="Email: " value={email} />
        <Row title="Cell: " value={cell} />
        <Row title="Birth: " value={dob.date} />
        <Row title="Age: " value={dob.age} />
        <Row title="Gender: " value={gender} />
        <Row title="Address: ">
          <p>{`${location.street.number} ${location.street.name}`} </p>
          <p>{`${location.city} ${location.state} ${location.country}`} </p>
          <p>{`${location.postcode}`} </p>
        </Row>
      </div>
    </div>
  );
};
export default UserDetails;
