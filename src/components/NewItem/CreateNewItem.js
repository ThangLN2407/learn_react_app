import React from "react";
import ItemForm from "./ItemForm";
import "./style.css";

const CreateNewItem = ({ handleAddItem, itemLength }) => {
  const _onHandleSaveData = (inputData) => {
    const expenseData = {
      id: String(itemLength + 1),
      ...inputData,
    };
    handleAddItem(expenseData);
  };

  return (
    <div className="new-item">
      <ItemForm onSaveExpenseData={_onHandleSaveData} />
    </div>
  );
};

export default CreateNewItem;
