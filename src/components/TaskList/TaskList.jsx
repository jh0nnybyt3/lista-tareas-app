import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList(props) {
  return (
    <>
      <div className="listado">
        <p className="tlistado">Listado de Tareas:</p>
        <ul>
          {props.tareas.map((x) => {
            return (
              <li>
                <TaskItem item={x} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
