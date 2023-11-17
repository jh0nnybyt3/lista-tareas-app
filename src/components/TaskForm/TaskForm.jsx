import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ agregarTarea }) {
  const [input, setInput] = useState("");

  const agregar = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      agregarTarea(input);
      setInput("");
    }
  };

  return (
    <>
      <div className="agregar-tarea">
        <form className="row g-3">
          <div className="col-auto">
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
