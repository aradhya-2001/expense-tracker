import "./ExpenseForm.css"
import { useState } from "react"

/*props={
    on_save:function saveData(data){
        props.new_item(data)
    }
    on_cancel:function cancelBtn(){
        update(false)
      }
}*/
 
export default function ExpenseForm(props){
     /* If we had stored event.target.value in a let (defined above eventHandler func) and consoled here then it would print undefined coz component func is called only once (at start of rendering page) and at start the value of let will be undefined (it will change later on key press). So after key press, component func will not be called and no console log again happens. But through useState, on every key press component func is called again and again so console.log will happen every time  */
    const [title,setTitle]=useState("")
    const [amt,setAmt]=useState("")
    const [date,setDate]=useState("")
    const [id,setId]=useState(4) 

/* to use one state instead of multiple:-
const [value, update]=useState({
    title:"",
    amt:"",
    date:"",
})
to call this func in every event handler with updating only 1 key at a time :-
update((prev_state)=>{
        return {...prev_state,title:event.target.value} 
        })*/

    function titleHandler(event){
         setTitle(event.target.value) /* event.target.value is updating every time we press a key. So untill we have typed full word it will keep changing its value after every key press. */
    }

    function amountHandler(event){
        setAmt(event.target.value)
    }

    function dateHandler(event){
        setDate(event.target.value)
    }
    
    function submitHandler(event){
        event.preventDefault() /* this disables the default behaviour of clicking the submit button i.e. sending a get/post req to the server where the site is hosted. No req will be sent and we will stay at the current page  */
        
        const expense_data={
            date:new Date(date),  /* value of date will be 2023-04-01 but our ExpenseDate.js file renders date on input as "Sat Apr 01 2023 16:24:04 GMT+0530 (India Standard Time)" i.e. full date string */
            title:title,
            price:Number(amt), /* amt was in string form */
            id:id,
        }
        props.on_save(expense_data) /* we are calling the function saveData() on the NewExpense.js page with parameter expense_data from here */
        setTitle("")/* after clicking submit the prev entered input should also reset */
        setAmt("")
        setDate("")
        setId(prev_state=>prev_state+1)
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="expense-form">
                <div>
                    <label>Title</label>
                    <input onChange={titleHandler} value={title} type="text"/>
                </div>
                <div>
                    <label>Amount</label>
                    <input onChange={amountHandler} value={amt} type="number" min="0.01" step="0.01" />
                </div>
                <div>
                    <label>Date</label>
                    <input onChange={dateHandler} value={date} type="date" min="2021-01-01" max="2023-03-01" />
                </div>
            </div>
            <div className="form-button-div">
                <button className="form-button" onClick={props.on_cancel}>Cancel</button> {/* intead of making a func to onClick and then triggering the props.on_cancel() func inside it, we are triggering here itself */}
                <button className="form-button" type="submit">Add Expense</button>
            </div>
        </form>
    )
}