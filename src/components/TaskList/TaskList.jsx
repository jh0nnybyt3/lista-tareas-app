import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList(props) {
  return (
    <>
      <div className="listado">
        <p className="tlistado">Listado de Tareas:</p>
        <ul className="list-group">
          { // recorro el array que obtuve desde las props y a cada valor se lo paso a TaskItem
          props.tareas.map((x) => {
            return (
              <li className="list-group-item">
                {/* item={x} envio cada tarea individual al componente TaskItem atras vez de las props */}
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