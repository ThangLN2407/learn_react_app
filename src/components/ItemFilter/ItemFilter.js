import React, { useRef } from "react";

import "./style.css";

const ExpensesFilter = ({ handleFilter, selected }) => {
  const handleChange = (event) => {
    handleFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select onChange={handleChange} value={selected}>
          <option value="">all</option>
          <option value="full">full</option>
          <option value="middle">middle</option>
          <option value="notFull">not full</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
