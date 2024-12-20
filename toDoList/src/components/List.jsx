import ListItem from "./ListItem";

function List({ todos, deleteTodo, highlightTodo, searchInput }) {
  return (
    <div className="list">
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          highlightTodo={highlightTodo}
          searchInput={searchInput}
        />
      ))}
    </div>
  );
}

export default List;
