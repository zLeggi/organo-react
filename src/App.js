import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [employees, setEmployees] = useState([]);

  const whenNewAddEmployee = (employee) => {
    console.log(employee);
    setEmployees([...employee, employee]);
  };

  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
    },

    {
      name: "Front-End",
      primaryColor: "#82CFFA'",
      secundaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secundaryColor: "#FAE5F5",
    },

    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form
        whenToRegisterEmployee={(employee) => whenNewAddEmployee(employees)}
      />
      <Team name="Programação" />
      <Team name="Front End" />
      <Team name="Data Science" />
      <Team name="DevOps" />
      <Team name="UX & Design" />
      <Team name="Mobile" />
      <Team name="Inovação e Gestão" />
    </div>
  );
}

export default App;
