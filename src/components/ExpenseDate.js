import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <>
      <div>{`${day}-${month}-${year}`}</div>
      <button onClick={props.handleClick}>click here</button>
      <button onClick={props.handleHover}>hover here</button>
    </>
  );
};

export default ExpenseDate;
