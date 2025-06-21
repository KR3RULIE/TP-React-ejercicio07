import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <div className="border border-2 border-success d-flex align-items-center m-1">
      <EmpleadoAvatar pic={empleado.pic} name={empleado.fullName} />
      <div className="ms-3">
        <h5>{empleado.fullName}</h5>
        <p>
          {empleado.title} - <span className="bg-info text-light p-1 rounded-2">{empleado.department}</span>
        </p>
      </div>
    </div>
  );
};

export default EmpleadoRow;
