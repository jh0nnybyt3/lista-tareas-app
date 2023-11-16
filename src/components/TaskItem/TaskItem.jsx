import { useState } from "react";
import "./TaskItem.css";

function TaskItem(props) {

  const [estado, setEstado]= useState({
    marcado: false,
  })

  const marcarComoCompleto= ()=> {
    setEstado({
      marcado : !estado.marcado,
    })
  }
  return (
    <>
      <div className="item">
        {/* pongo la tarea que recibo por props en la etiqueta <p> */}
        <p>{props.item}</p>
        <button onClick={marcarComoCompleto}>{estado.marcado ? "Tarea REALIZADA": "Tarea Pendiente"}</button>
      </div>
    </>
  );
}
export default TaskItem;