import "./TaskItem.css";

function TaskItem(props) {
  return (
    <>
      <div className="item">
        <p>{props.item}</p>
        <button>Tarea Completada</button>
      </div>
    </>
  );
}

export default TaskItem;
