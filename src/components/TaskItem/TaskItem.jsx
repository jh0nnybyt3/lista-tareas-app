import { useState } from "react";
import "./TaskItem.css";

function TaskItem({
  id,
  nombre,
  completada,
  cambiarCompletada,
  eliminarModal
}) {
  const [estado, setEstado] = useState({
    marcado: completada,
  });

  const marcarComoCompleto = () => {
    setEstado({
      marcado: !estado.marcado,
    });
    estado.marcado ? cambiarCompletada(id, true) : cambiarCompletada(id, false);
  };

  return (
    <>
      <div className="item">
        {estado.marcado ? (
            <i className="bi bi-bell-slash"></i>
        ) : (
            <i className="bi bi-bell"></i>
        )}
        <p
          style={{
            color: estado.marcado ? "red" : "black",
            textDecoration: estado.marcado ? "line-through" : "none",
          }}
        >
          {nombre}
        </p>
        <button
          type="button"
          className="btn btn-light"
          onClick={marcarComoCompleto}
        >
          {estado.marcado ? (
            <i className="bi bi-toggle-on"></i>
          ) : (
            <i className="bi bi-toggle-off"></i>
          )}
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={() => eliminarModal(id)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </>
  );
}
export default TaskItem;
