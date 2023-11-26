import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "../types/User";

const UserDetailsPage: React.FC = () => {
  let location = useLocation();
  const { state } = location;
  const user: User = state.user;

  return (
    <div>
      <h2>User Details Page</h2>
      <div>
        <img src={user.profilePicture} alt={`${user.name}'s Profile`} />
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <Link to="/user-list">Back to User List</Link>
    </div>
  );
};

export default UserDetailsPage;
