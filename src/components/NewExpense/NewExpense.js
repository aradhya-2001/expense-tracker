import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
/* props={
    new_expense:function add_item(data){
    update(prev_state=>[data, ...prev_state]) 
    }
}*/

export default function NewExpense(props) {
  const [show_form, setFormVisibilty] = useState(false);

  function saveData(data) {
    props.new_expense(data);
  }

  function addExpenseButton() {
    setFormVisibilty(true);
  }

  function cancelBtn() {
    setFormVisibilty(false);
  }
  let content = (
    <button onClick={addExpenseButton} className="form-button">
      Add New Expense
    </button>
  );
  if (show_form === true) {
    content = <ExpenseForm on_save={saveData} on_cancel={cancelBtn} />;
  }

  return <div className="new-expense">{content}</div>;
}
