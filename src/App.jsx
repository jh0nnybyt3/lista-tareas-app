import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [ultimaTareaAgregada, setUltimaTareaAgregada] = useState(null);
  const [tareaEliminada, setTareaEliminada] = useState("");

  /*   // Efecto para cargar las tareas desde localStorage al cargar la aplicación
      useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        setTareas(tareasGuardadas);
      }, []);
    
      // Efecto para guardar las tareas en localStorage cada vez que el estado de tareas cambia
      useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
      }, [tareas]); */

  const toastAgregar = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("toastAgregar")
  );

  const toastEliminar = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("toastEliminar")
  );

  useEffect(() => {
    if (ultimaTareaAgregada) {
      toastAgregar.show();
      setUltimaTareaAgregada(null);
    }
  }, [ultimaTareaAgregada]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    setUltimaTareaAgregada(nuevaTarea);
  };

  const eliminarTarea = (indice) => {
    setTareaEliminada(tareas[indice]);
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(indice, 1);
    setTareas(nuevasTareas);
    toastEliminar.show();
  };

  return (
    <>
      <div className="container">
        <h1>Lista-Tareas-App</h1>
        <TaskForm agregarTarea={agregarTarea} />
        <TaskList tareas={tareas} eliminarTarea={eliminarTarea} />
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="toastAgregar"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Info:</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Tarea {tareas[tareas.length - 1]} agregada correctamente.
            </div>
          </div>
        </div>
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="toastEliminar"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Info:</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Tarea {tareaEliminada} eliminada correctamente.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
