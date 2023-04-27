// to create a react app-> npx create-react-app@latest my-app
// to run project-> npm start
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";  /* '.' means we went to the folder where App.js is i.e. we are on src folder */
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses=[
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

export default function App() {

  const [items, update]=useState(dummy_expenses)
  function add_item(data){
    update(prev_state=>[data, ...prev_state])  /* if we write update(prev_state=>prev_state.push(data)) then it gives err after clicking add expense button --> coz we are returning push opeation like return prev_state.push(data) but we have to return actual thing like array/object..*/
  }
  
  return (
    <div>
      <NewExpense new_expense={add_item} />
      <Expenses expenses={items}/>
    </div>
  );
}