import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
import { useEffect } from "react";

function TaskList({ tareas, cambiarCompletada, eliminarModal }) {
  return (
    <>
      <div className="listado">
        <p className="tlistado">Listado de Tareas:</p>
        <ul className="list-group">
          {tareas.map((tarea) => {
            return (
              <li className="list-group-item" key={tarea.id}>
                <TaskItem
                  nombre={tarea.nombre}
                  id={tarea.id}
                  completada={tarea.completada}
                  cambiarCompletada={cambiarCompletada}
                  eliminarModal={eliminarModal}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
