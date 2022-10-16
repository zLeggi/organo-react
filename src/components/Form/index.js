import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="form">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField placeholder="Digite seu Nome" label="Nome" />
        <TextField placeholder="Digite seu Cargo" label="Cargo" />
        <TextField placeholder="Informe o endereço da imagem " label="Imagem" />

        <DropDown itens={times} label="Time" />
      </form>
    </section>
  );
};

export default Form;
