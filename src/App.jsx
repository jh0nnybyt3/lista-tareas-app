import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [ultimaTareaAgregada, setUltimaTareaAgregada] = useState(null);
  const [tareaEliminada, setTareaEliminada] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idTarea, setIdTarea] = useState(0);

  const eliminarModal = (id) => {
    setShowModal(true);
    setIdTarea(id);
  };

  const ocultarModal = () => {
    setShowModal(false);
  };

  // Efecto para cargar las tareas desde localStorage al cargar la aplicación
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  // Efecto para guardar las tareas en localStorage cada vez que el estado de tareas cambia
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // declaro para el uso del toast
  const toastAgregar = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("toastAgregar")
  );

  const toastEliminar = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("toastEliminar")
  );

  // se ejecuta cuando se agrega una tarea nuevo porque ultimaTareaAgregada cambia de estado
  // muestra el toast con el mensaje de agregado correctamente
  useEffect(() => {
    if (ultimaTareaAgregada) {
      toastAgregar.show();
    }
  }, [ultimaTareaAgregada]);

  // agrega la tarea nueva como un objeto y actualiza el estado ultimaTareaAgregada para que se muestre el mensaje
  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombreTarea,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setUltimaTareaAgregada(nuevaTarea.nombre);
  };

  // cambia el estado de la tarea a completada
  const cambiarCompletada = (id, completada) => {
    const cambioCompletada = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !completada } : tarea
    );
    setTareas(cambioCompletada);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  };

  // elimina una tarea y modifica al estado tareaEliminada para mostrarla en el toast
  const eliminarTarea = (id) => {
    const tareaAEliminada = tareas.find((tarea) => tarea.id === id);
    const tareasRestantes = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasRestantes);
    setTareaEliminada(tareaAEliminada.nombre);
    ocultarModal();
    toastEliminar.show();
  };

  return (
    <>
      <div className="container">
        <h1>
          <i className="bi bi-journal-text"></i> Mis tareas
        </h1>
        <TaskForm agregarTarea={agregarTarea} />
        <TaskList
          tareas={tareas}
          cambiarCompletada={cambiarCompletada}
          eliminarModal={eliminarModal}
        />
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="toastAgregar"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">
                <i className="bi bi-info-circle"></i>
              </strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Tarea <strong className="me-auto">"{ultimaTareaAgregada}"</strong>{" "}
              agregada correctamente.
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
              <strong className="me-auto">
                <i className="bi bi-info-circle"></i>
              </strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Tarea <strong className="me-auto">"{tareaEliminada}"</strong>{" "}
              eliminada correctamente.
            </div>
          </div>
        </div>

        <div>
          <div
            className={`modal ${showModal ? "show" : ""}`}
            style={{ display: showModal ? "block" : "none" }}
            tabIndex="-1"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirmación</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={ocultarModal}
                  ></button>
                </div>
                <div className="modal-body">
                  ¿Estás seguro que deseas eliminar esta tarea?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={ocultarModal}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => eliminarTarea(idTarea)}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*          {showModal && (
            <div
              className="modal-backdrop fade show"
              onClick={ocultarModal}
            ></div>
          )} */}
        </div>
      </div>
    </>
  );
}

export default App;
