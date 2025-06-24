import "./EmpleadoAvatar.css";

const EmpleadoAvatar = ({ pic, name }) => {
  return (
    <img
      className="ms-1 w-sm-15 img-fluid"
      src={pic}
      alt={`Foto de ${name}`}
    />
  );
};

export default EmpleadoAvatar;
