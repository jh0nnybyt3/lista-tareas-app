import "./TaskForm.css";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  return (
    <>
      <div className="agregar-tarea">
        <input type="text" />
        <button>Agregar Tarea</button>
      </div>
      <TaskList />
    </>
  );
}

export default TaskForm;
