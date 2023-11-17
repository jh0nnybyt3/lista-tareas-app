import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tareas, eliminarTarea }) {
  return (
    <>
      <div className="listado">
        <p className="tlistado">Listado de Tareas:</p>
        <ul className="list-group">
          {tareas.map((tarea, id) => {
            return (
              <li className="list-group-item" key={id}>
                <TaskItem tarea={tarea} id={id} eliminarTarea={eliminarTarea} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
