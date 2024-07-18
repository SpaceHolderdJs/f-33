import { faker } from "@faker-js/faker";
import { useReducer } from "react";

type TodoType = {
  id: number;
  title: string;
  text: string;
  isDone?: boolean;
};

type ActionType = {
  type: string;
  payload: unknown;
};

const todosReducer = (state: TodoType[], action: ActionType) => {
  switch (action.type) {
    case "add-todo":
      return [...state, action.payload as TodoType];

    case "remove-todo":
      return state.filter((todo) => todo.id !== action.payload);

    case "done-todo": {
      const payload = action.payload as TodoType;
      return state.map((todo) => (todo.id === payload.id ? payload : todo));
    }

    default:
      return state;
  }
};

export const Todos = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const onCreateTodo = () => {
    const todoData = {
      id: todos.length + 1,
      title: faker.string.sample(),
      text: faker.string.sample(),
      isDone: false,
    };

    dispatch({ type: "add-todo", payload: todoData });
  };

  return (
    <div>
      <button onClick={onCreateTodo}>Create Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <p>{todo.text}</p>
          <button
            onClick={() => dispatch({ type: "remove-todo", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
