import "./Card.css"

export default function Card(props){
    const classes="card "+props.className  /* props.className and props.children are built-in  */
    return <div className={classes}>{props.children}</div>
}