
import "./TextField.css";

export const TextField = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  // // let variableValue = "Amaymon by'Lucifer";

  // const [variableValue, setVariableValue] = useState("Amaymon by'Lucifer")

  const whenTyped = (event) => {
    // setVariableValue(event.target.value);
    // console.log(variableValue);

    props.whenChanged(event.target.value)
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.variableValue}
        onChange={whenTyped}
        required={props.required}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
