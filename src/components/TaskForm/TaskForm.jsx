import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ agregarTarea }) {
  const [input, setInput] = useState("");

  const agregar = (e) => {
    e.preventDefault();
    const inputF = document.getElementById("tarea");
    const errorInput = document.getElementById("errorInput");

    if (input.trim() !== "") {
      agregarTarea(input);
      setInput("");
      inputF.style.border = '1px solid #dee2e6';
      errorInput.style.display = 'none';
    } else { 
      inputF.style.border = '2px solid red';
      errorInput.style.display = 'block';
    }
  };

  return (
    <>
      <div className="agregar-tarea">
        <form className="row g-3">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="tarea"
              placeholder="Ingrese tarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <p id="errorInput" style={{display: "none", color: "red"}}>* El campo tareas no debe ser vacio!!!</p>
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="btn btn-warning mb-3"
              onClick={(e) => agregar(e)}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
