import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const _onHandleClick = () => {
    // truyền data lên cho component cha
    const data = {
      name: "test",
      number: 1
    }

    props.handleClick(data)
  };

  return (
    <>
      <div>{`${day}-${month}-${year}`}</div>
      <button onClick={_onHandleClick}>click here</button>
      <button onClick={props.handleHover}>hover here</button>
    </>
  );
};

export default ExpenseDate;
