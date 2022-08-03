import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./style.css";

const ExpenseItem = ({ item }) => {
  const [date] = useState(new Date());

  const _onHandleClick = () => {
    alert();
  };

  const _onHandleShowItem = () => {
    const res = item?.length
      ? item?.map((val, index) => (
          <div className="expense-item" key={`${val?.id}-${index}`}>
            <div className="expense-item__date">
              <div>{val?.status}</div>
              <ExpenseDate
                date={date}
                handleClick={_onHandleClick}
                handleHover={(e) => {
                  console.log(e);
                }}
                value="value"
              />
            </div>
            <div className="expense-item__description">
              <h1>{val?.name}</h1>
              <h1 className="expense-item__status">{val?.main}</h1>
            </div>
          </div>
        ))
      : null;
    return res;
  };

  return <>{_onHandleShowItem()}</>;
};

export default ExpenseItem;
