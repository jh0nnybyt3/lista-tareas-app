import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
import { useEffect } from "react";

function TaskList({ tareas, cambiarCompletada, eliminarTarea }) {
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
                  eliminarTarea={eliminarTarea}
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
