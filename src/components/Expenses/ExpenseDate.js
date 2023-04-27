/* props={date:"Sat Apr 01 2023 16:24:04 GMT+0530 (India Standard Time)"} */

import "./ExpenseDate.css"

 const ExpenseDate=(props)=> {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <div className="month"> {month} </div>
      <div className="day"> {day} </div>
      <div className="year"> {year} </div>
    </div>
  );
}

export default ExpenseDate