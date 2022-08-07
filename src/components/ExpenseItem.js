import React, { useCallback, useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from "./ItemFilter/ItemFilter";
import "./style.css";

const ExpenseItem = ({ items, handleFilterStatus }) => {
  const [date] = useState(new Date());
  const [filterStatus, setFilterStatus] = useState("");
  const _onHandleClick = useCallback((params) => {
    console.log(
      "🚀 ~ file: ExpenseItem.js ~ line 9 ~ const_onHandleClick=useCallback ~ params",
      params
    );
  }, []);

  const _onHandleShowItem = () => {
    const res = items?.length
      ? items?.map((val, index) => (
          <div className="expense-item" key={`${val?.id}-${index}`}>
            <div className="expense-item__date">
              <div>{val?.status}</div>
              <Card>
                <ExpenseDate
                  date={date}
                  handleClick={_onHandleClick}
                  handleHover={(e) => {
                    console.log(e);
                  }}
                  value="value"
                />
              </Card>
            </div>
            <div className="expense-item__description">
              <h3>{val?.name}</h3>
              <h3 className="expense-item__status">{val?.main}</h3>
            </div>
          </div>
        ))
      : null;
    return res;
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
    handleFilterStatus(status);
  };
  return (
    <>
      <div>
        <label>filter by status</label>
        <ExpensesFilter selected={filterStatus} handleFilter={handleFilter} />
      </div>
      {_onHandleShowItem()}
    </>
  );
};

export default ExpenseItem;
