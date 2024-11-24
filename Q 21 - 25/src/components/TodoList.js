import React, { useState } from "react";

const TodoItem = React.memo(({ item }) => {
  console.log(`Rendering TodoItem: ${item}`);
  return <li>{item}</li>;
});

const TodoList = () => {
  const [todos, setTodos] = useState(["Learn React", "Practice Tailwind"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodos((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <ul className="list-disc pl-4">
        {todos.map((todo, index) => (
          <TodoItem key={index} item={todo} />
        ))}
      </ul>
      <input
        type="text"
        className="input input-bordered"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
