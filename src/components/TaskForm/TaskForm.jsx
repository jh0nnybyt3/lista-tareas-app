import { useState } from "react";
import "./TaskForm.css";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  // declaro los estados de las tareas y el estado del input, con su funciones de asignacion
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  // funcion para agregar nueva tarea a la lista de tareas conservando las anteriores y vaciado del input una vez agreagada la tarea
  const agregarTarea = (e) => {
    e.preventDefault();
    const newTareas = [...tareas, input];
    setTareas(newTareas);
    setInput("");
  };

  return (
    <>
      <div className="agregar-tarea">
        <form className="row g-3">
          <div className="col-auto">
            {/* value={input} mostra el input y onChange={(e)=> setInput(e.target.value)} actualiza el estado del input */}
            <input
              type="text"
              className="form-control"
              id="tarea"
              placeholder="Ingrese tarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={(e) => agregarTarea(e)}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
      {/* tareas={tareas} le paso por props el array de tareas al componente TaskList */}
      <TaskList tareas={tareas} />
    </>
  );
}

export default TaskForm;
