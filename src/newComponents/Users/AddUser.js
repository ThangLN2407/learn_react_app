import React, { useState } from "react";
import Card from "../UI/Card";
import "./style.css";

const AddUser = (props) => {
  const [valueName, setValueName] = useState("");
  const [valueAge, setValueAge] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (valueName.trim().length === 0 || valueAge.trim().length === 0) {
      return;
    }

    if (valueAge < 1) {
      return;
    }
    
    props.onAddUser({
      name: valueName,
      age: valueAge,
      id: Math.random().toString()
    })

    resetValue();
  };

  const resetValue = () => {
    setValueName("");
    setValueAge("");
  };

  const handleChangeName = (e) => {
    setValueName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setValueAge(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={valueName}
            onChange={handleChangeName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={valueAge}
            onChange={handleChangeAge}
          />
        </div>

        <button type="submit">add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
