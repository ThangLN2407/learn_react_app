import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <>
      {/* có 2 cách để thêm 1 components */}
      {/* cách 1 */}
      <ExpenseItem />
      {/* cách 2 */}
      <ExpenseItem></ExpenseItem>
    </>
  );
}

export default App;
