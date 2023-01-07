import React from "react";

interface props {
  img: string;
  user: string;
  members: string;
}

const Users: React.FC<props> = ({ img, user, members }) => {
  return (
    <div className="users-list">
      <img src={img} alt="icon 1" />
      <p>{user}</p>
      <h1>{members}</h1>
    </div>
  );
};

export default Users;
