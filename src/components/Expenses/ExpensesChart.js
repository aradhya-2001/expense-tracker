import Chart from "../Chart/Chart"

export default function ExpensesChart(props){  
    const chart_data=[        /* initialised the total expense amount of each month to 0 */
        {label:"Jan", amount:0},
        {label:"Feb", amount:0},
        {label:"Mar", amount:0},
        {label:"Apr", amount:0},
        {label:"May", amount:0},
        {label:"Jun", amount:0},
        {label:"Jul", amount:0},
        {label:"Aug", amount:0},
        {label:"Sep", amount:0},
        {label:"Oct", amount:0},
        {label:"Nov", amount:0},
        {label:"Dec", amount:0},   
    ]

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

  props.expenses.forEach(expense => {
      const expense_month=expense.date.getMonth();  /* date.getMonth() will give months as 0,1.. for Jan,Feb.. from expense prop */
      chart_data[expense_month].amount+=expense.price      /* this will sum up all the expenses price of each month  */
  });

    return <Chart data_points={chart_data} />
}