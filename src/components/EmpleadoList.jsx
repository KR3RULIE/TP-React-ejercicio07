import EmpleadoRow from "./EmpleadoRow";
import ceo from "../assets/ceo.png";
import cmo from "../assets/cmo.png";
import cfo from "../assets/cfo.png";
import cto from "../assets/cto.png";
import artDirector from "../assets/art-director.png";
import frontendDev from "../assets/frontend-dev.jpg";
import digitalStrategist from "../assets/digital-strategist.jpg";
import backendDev from "../assets/backend-dev.webp";
import devOpsEngineer from "../assets/devops.png";

const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: ceo,
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: cmo,
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: cfo,
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: cto,
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: artDirector,
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: frontendDev,
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: digitalStrategist,
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: backendDev,
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: devOpsEngineer,
    },
  ];
  return (
    <section className="container">
      <div className="border border-2 border-info mx-auto my-3">
        {empleados.map((empleado) => (
          <EmpleadoRow key={empleados.id} empleado={empleado}></EmpleadoRow>
        ))}
      </div>
    </section>
  );
};

export default EmpleadoList;
