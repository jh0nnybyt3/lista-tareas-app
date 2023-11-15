import { useState } from "react";
import "./TaskForm.css";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  const agregarTarea = () => {
    const newTareas = [...tareas, input];
    setTareas(newTareas);
    setInput("");
  }

  return (
    <>
      <div className="agregar-tarea">
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={ () => agregarTarea() }>Agregar Tarea</button>
      </div>
      <TaskList tareas={tareas} />
    </>
  );
}

export default TaskForm;
