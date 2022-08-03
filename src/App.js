import ExpenseItem from "./components/ExpenseItem";
import { item } from "./mockData/mockItem";

function App() {
  return (
    <>
      {/* có 2 cách để thêm 1 components */}
      {/* cách 1 */}
      <ExpenseItem item={item} />
      {/* cách 2 */}
      {/* <ExpenseItem></ExpenseItem> */}
    </>
  );
}

export default App;
