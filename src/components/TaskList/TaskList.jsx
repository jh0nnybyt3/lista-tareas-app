import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList() {
  return (
    <>
      <div className="listado">
        <p className="tlistado">Listado de Tareas:</p>
        <ul>
          <li>
            <TaskItem />
          </li>
        </ul>
      </div>
    </>
  );
}

export default TaskList;
