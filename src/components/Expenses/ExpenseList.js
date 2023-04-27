import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="empty-list">No items available.</h2>; /* expense_content is the conditional content */
  }
  return (
    <ul className="non-empty-list">
      {props.expenses.map(exp_i => (/* map takes each object of the array and convert it into a ExpenseItem tag. At last an array is formed like [<ExpenseItem/>,<ExpenseItem/>,<ExpenseItem/>...] but since we have put a {} outside whole thing so it becomes {[<ExpenseItem/>,<ExpenseItem/>,<ExpenseItem/>...]} so the whole array will be rendered on the screen */
          <ExpenseItem
            date={exp_i.date}
            title={exp_i.title}
            price={exp_i.price}
            key={exp_i.id} /*  key is default attribute of a react component and of HTML.4 */
          />
        )
      )}
    </ul>
  );
}
