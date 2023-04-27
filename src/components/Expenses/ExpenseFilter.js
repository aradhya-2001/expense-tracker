import "./ExpenseFilter.css";
/* props={
  on_select: function newYr(yr) {
    update(yr);
} */

export default function ExpenseFilter(props) {
  function getOption(event) {
    props.on_select(event.target.value);
  }

  return (
    <div className="filter">
      <div className="filter-flex">
        <label>Filter by year</label>
        <select onChange={getOption}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
