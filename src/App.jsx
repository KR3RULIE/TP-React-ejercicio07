import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <main>
        <h1 className="text-center">Empleados</h1>
        <EmpleadoList></EmpleadoList>
      </main>
      <footer className="text-center text-light bg-black py-1">
        <p>
          By{" "}
          <a
            href="https://github.com/KR3RULIE"
            target="blank"
            className="text-decoration-none text-danger"
          >
            KR3RULIE
          </a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
