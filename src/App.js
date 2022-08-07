import { useEffect, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import CreateNewItem from "./components/NewItem/CreateNewItem";
import { items } from "./mockData/mockItem";

function App() {
  const [itemData, setItemData] = useState(items);

  useEffect(() => {
    if (items.length) {
      setItemData(items);
    }
  }, []);

  const handleAddItem = (item) => {
    // const size =  Object.keys(itemData).length;
    // setItemData([...itemData, item]);

    // cách 2
    setItemData((prevState) => {
      return [item, ...prevState];
    });
  };

  const handleFilter = (filterValue) => {
    if (filterValue) {
      const newList = items.filter((item) => item.status === filterValue);
      setItemData(newList);
    } else {
      setItemData([...itemData]);
    }
  };

  return (
    <>
      <CreateNewItem handleAddItem={handleAddItem} itemLength={items.length} />
      {/* có 2 cách để thêm 1 components */}
      {/* cách 1 */}
      <ExpenseItem items={itemData} handleFilterStatus={handleFilter} />
      {/* cách 2 */}
      {/* <ExpenseItem></ExpenseItem> */}
    </>
  );
}

export default App;
