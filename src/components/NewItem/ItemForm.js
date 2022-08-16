import React, { useState } from "react";
import "./style.css";

const initData = {
    name: "",
    main: "",
    status: "",
}

const ItemForm = ({ onSaveExpenseData }) => {
  const [inputData, setInputData] = useState(initData);

  const _onHandleChangeName = (event) => {
    // change state = previous state
    setInputData((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const _onHandleChangeMain = (event) => {
    setInputData({
      ...inputData,
      main: event.target.value,
    });
  };
  const _onHandleChangeStatus = (event) => {
    setInputData({
      ...inputData,
      status: event.target.value,
    });
  };

  const _onHandleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      ...inputData,
    };
    onSaveExpenseData(expenseData);
    setInputData(initData);
  };
  return (
    <form onSubmit={_onHandleSubmit}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Name</label>
          <input
            type="text"
            value={inputData?.name}
            onChange={_onHandleChangeName}
          />
        </div>
        <div className="new-item__control">
          <label>Main</label>
          <input
            type="text"
            value={inputData?.main}
            onChange={_onHandleChangeMain}
          />
        </div>
        <div className="new-item__control">
          <label>Status</label>
          <input
            type="text"
            value={inputData?.status}
            onChange={_onHandleChangeStatus}
          />
        </div>

      </div>
      <div className="new-item__actions">
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default ItemForm;
