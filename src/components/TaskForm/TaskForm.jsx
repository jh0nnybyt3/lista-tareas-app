import { useState } from "react";
import "./TaskForm.css";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  // declaro los estados de las tareas y el estado del input, con su funciones de asignacion
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  // funcion para agregar nueva tarea a la lista de tareas conservando las anteriores y vaciado del input una vez agreagada la tarea
  const agregarTarea = () => {
    const newTareas = [...tareas, input];
    setTareas(newTareas);
    setInput("");
  }

  return (
    <>
      <div className="agregar-tarea">
        {/* value={input} mostra el input y onChange={(e)=> setInput(e.target.value)} actualiza el estado del input */}
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={ () => agregarTarea() }>Agregar Tarea</button>
      </div>
       {/* tareas={tareas} le paso por props el array de tareas al componente TaskList */}
      <TaskList tareas={tareas} />
    </>
  );
}

export default TaskForm;
