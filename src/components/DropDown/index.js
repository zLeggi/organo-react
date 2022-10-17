import "./DropDown.css";

const DropDown = (props) => {
  return (
    <div className="drop-down">
      <label>{props.label}</label>

      <select 
      onChange={event => props.whenChanged(event.target.value)}
      value={props.value}
      required={props.required}>
        {props.itens.map((item) => {
          return <option  key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
