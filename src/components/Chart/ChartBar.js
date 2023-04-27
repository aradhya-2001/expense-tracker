import "./ChartBar.css"

/* props={
    key:"Feb",
    value:12,
    max_value:982,
    label:"Feb"
} */

export default function ChartBar(props){
    let filled_height="0%";

    if(props.max_value>0){
        filled_height=Math.round((props.value/props.max_value)*100)+"%"; /* like props.value is 25 and props.max_value is 50 so props.value is 50% of props.max_value  */
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:filled_height}}></div> {/* is simple html inline style is written as style="property:value;" but in react instead of "", it is written as style={} and the property and value are in form of an object like {property:value} */}
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}