import "./Chart.css";
import ChartBar from "./ChartBar";

/* props={
  data_points:[        
  {label:"Jan", amount:982},
  {label:"Feb", amount:12},
  {label:"Mar", amount:342},
  {label:"Apr", amount:0},
  {label:"May", amount:0},
  {label:"Jun", amount:233},
  {label:"Jul", amount:56},
  {label:"Aug", amount:546},
  {label:"Sep", amount:236},
  {label:"Oct", amount:0},
  {label:"Nov", amount:0},
  {label:"Dec", amount:789},   
]
} */

export default function Chart(props) {

  const all_amts=props.data_points.map(data_point=>data_point.amount)
  const max_amt=Math.max(...all_amts) /* Math.max takes out max value form list of arguments like (1,2,3..) so spread operator ... pulls out all nos from the array */

  return (
    <div className="chart">
      {props.data_points.map((data_point) => (
        <ChartBar
          key={data_point.label}
          value={data_point.amount}
          max_value={max_amt}
          label={data_point.label}
        />
      ))}
    </div>
  );
}
