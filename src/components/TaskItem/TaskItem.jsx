import "./TaskItem.css";

function TaskItem(props) {
  return (
    <>
      <div className="item">
        {/* pongo la tarea que recibo por props en la etiqueta <p> */}
        <p>{props.item}</p>
        <button>Tarea Completada</button>
      </div>
    </>
  );
}

export default TaskItem;
