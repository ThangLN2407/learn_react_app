import React, { useState } from "react";
import AddUser from "./newComponents/Users/AddUser";
import ListUser from "./newComponents/Users/ListUser";

const App2 = () => {
  const [users, setUsers] = useState([]);

  const onAddUser = (value) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: value.name, age: value.age }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <ListUser users={users} />
    </div>
  );
};

export default App2;
