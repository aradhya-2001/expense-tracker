import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card"; /* "../"moves us to the parent folder (here components). We were in the Expenses folder initially */
import ExpenseFilter from "./ExpenseFilter"; /* we are already in the components folder coz Expense.js in there */
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

/* props={
  expenses:[
      {
    id:1,
    date: new Date("2021-01-10"),
    title: "order",
    price: 10,
  },
  {
    id:2,
    date: new Date("2021-02-19"),
    title: "movie",
    price: 100,
  },
  {
    id:3,
    date: new Date("2021-11-22"),
    title: "netflix",
    price: 200,
  },
  ]
}*/
export default function Expenses(props) {
  const [filter_yr, updateYr] = useState("2019");

  function newYr(yr) {
    updateYr( yr); 
    /* if we log filter_yr now, it will not give the correct o/p. It will log the previous yr selected. But if we log it outiside this func then it will give correct. */
  }
  let filtered_expenses = props.expenses.filter(i=>i.date.getFullYear().toString() === filter_yr);

  return (
    <Card className="expenses">
      <ExpenseFilter on_select={newYr} />
      <ExpensesChart expenses={filtered_expenses}/>
      <ExpenseList expenses={filtered_expenses}/>
    </Card>
  );
}
