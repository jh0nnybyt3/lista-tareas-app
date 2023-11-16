import { useState } from "react";
import "./TaskItem.css";

function TaskItem(props) {

  const [estado, setEstado]= useState({
    marcado: false,
  })

  const marcarComoCompleto = () => {
    setEstado({
      marcado : !estado.marcado,
    })
  }
  return (
    <>
      <div className="item">
        {/* pongo la tarea que recibo por props en la etiqueta <p> */}
        <p style={{color: estado.marcado ? "rgb(207, 53, 53)": "black", textDecoration : estado.marcado ? "line-through": "none"}}>{props.item}</p>
        <button type="button" class={estado.marcado ? "btn btn-danger" : "btn btn-success"} onClick={marcarComoCompleto}>{estado.marcado ? "Tarea REALIZADA": "Tarea Pendiente"}</button>
      </div>
    </>
  );
}
export default TaskItem;