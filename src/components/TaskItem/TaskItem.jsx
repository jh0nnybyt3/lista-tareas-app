import { useState } from "react";
import "./TaskItem.css";

function TaskItem({ tarea, id, eliminarTarea }) {
  const [estado, setEstado] = useState({
    marcado: false,
  });

  const marcarComoCompleto = () => {
    setEstado({
      marcado: !estado.marcado,
    });
  };

  return (
    <>
      <div className="item">
        <p
          style={{
            color: estado.marcado ? "rgb(207, 53, 53)" : "black",
            textDecoration: estado.marcado ? "line-through" : "none",
          }}
        >
          {tarea}
        </p>
        <button
          type="button"
          className={estado.marcado ? "btn btn-warning" : "btn btn-success"}
          onClick={marcarComoCompleto}
        >
          {estado.marcado ? "Tarea ralizada" : "Tarea pendiente"}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarTarea(id)}
        >
          Eliminar
        </button>
      </div>
    </>
  );
}
export default TaskItem;
