import React from "react";

const ListUser = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={user.id}>
          {user.name} (age: {user.age})
        </li>
      ))}
    </ul>
  );
};

export default ListUser;
