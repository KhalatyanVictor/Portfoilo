import SharedBtn from "./SharedButton";

function ListItem({ todo, deleteTodo, highlightTodo, searchInput }) {
  if (!todo.task.toLowerCase().includes(searchInput.toLowerCase())) {
    return null;
  }

  return (
    <div className="listItem">
      <div
        className="toDoTitle"
        onClick={() => highlightTodo(todo.task)}
        style={{
          cursor: "pointer",
          textDecoration: todo.highlighted ? "line-through" : "none",
          backgroundColor: todo.highlighted ? "gray" : "#000000",
        }}
      >
        <h1
          className="value"
          onClick={() => highlightTodo(todo.task)}
          style={{
            cursor: "pointer",
            textDecoration: todo.highlighted ? "line-through" : "none",
            backgroundColor: todo.highlighted ? "gray" : "#000000",
          }}
        >
          {todo.task}
        </h1>
      </div>
      <div className="delete">
        <SharedBtn
          className="deleteBtn"
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
          }}
          name={"X"}
        />
      </div>
    </div>
  );
}

export default ListItem;
