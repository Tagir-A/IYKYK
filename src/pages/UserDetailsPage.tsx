import React from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>User Details Page for user with ID: {id}</div>;
};

export default UserDetailsPage;
