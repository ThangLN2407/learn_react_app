import React from "react";
import "./style.css";

const ExpenseItem = ({ item }) => {
  const _onHandleShowItem = () => {
    const res = item?.length
      ? item?.map((val, index) => (
          <div className="expense-item" key={`${val?.id}-${index}`}>
            <div className="expense-item__date">{val?.id}</div>
            <div className="expense-item__description">
              <h1>{val?.main}</h1>
              <h1 className="expense-item__status">{val?.status}</h1>
            </div>
          </div>
        ))
      : null;
    return res;
  };

  return <>{_onHandleShowItem()}</>;
};

export default ExpenseItem;
