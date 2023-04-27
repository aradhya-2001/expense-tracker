import ExpenseDate from "./ExpenseDate"; /* here ExpenseDate is a default export so if we import it as some other name like "import abb from ./ExpenseDate" then it should work but its not working (snehil)   */
import Card from "../UI/Card";
import "./ExpenseItem.css";
/* props ={title:"order", date:"Sat Apr 01 2023 16:24:04 GMT+0530 (India Standard Time)", price:10, key:4}  */

export default function ExpenseItem(props) {
 return (   /* return can return only 1 item so wrap everything inside 1 main div */
    <li>  {/* everything is wrapped in li coz ExpenseList contains whole array inside <ul></ul>. If we remove <li> then it wont affect o/p. It just adds more semantic meaning */}
      <Card className="item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="description">
          <h2> {props.title} </h2>
          <div className="price"> ${props.price} </div>
        </div>
      </Card>
    </li>
  );
}
