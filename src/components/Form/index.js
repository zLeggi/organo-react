import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import DropDown from "../DropDown";
import "./Form.css";

const Form = (props) => {
  const times = [
    "",
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const whenSave = (event) => {
    event.preventDefault();
    props.whenToRegisterEmployee({
      name,
      office,
      image,
      team,
    })
  };

  return (
    <section className="form">
      <form onSubmit={whenSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          placeholder="Digite seu Nome"
          label="Nome"
          value={name}
          whenChanged={(variableValue) => setName(variableValue)}
        />
        <TextField
          required={true}
          placeholder="Digite seu Cargo"
          label="Cargo"
          value={office}
          whenChanged={(variableValue) => setOffice(variableValue)}
        />
        <TextField
          required={true}
          placeholder="Informe o endereço da imagem "
          label="Imagem"
          value={image}
          whenChanged={(variableValue) => setImage(variableValue)}
        />

        <DropDown
          itens={times}
          label="Time"
          value={team}
          whenChanged={(variableValue) => setTeam(variableValue)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
