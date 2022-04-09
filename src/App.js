import Header from "./components/Header/Header.js";
import TodoForm from "./components/TodoForm/TodoForm.js";
import TodoList from "./components/TodoList/TodoList.js";
import TodoCount from "./components/TodoCount/TodoCount.js";

export default function App({ $target, initialState }) {
  new Header({ $target, text: "Simple Todo List" });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      todoList.setState([...todoList.state, { text, isCompleted: false }]);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
    onTodoChange: (todos) =>
      todoCount.setState({
        completedTodoCount: todos.filter((todo) => todo.isCompleted === true)
          .length,
        totalTodoCount: todos.length,
      }),
  });

  const todoCount = new TodoCount({
    $target,
    initialState: todoList.state,
  });
}
