import Header from './components/Header/Header.js';
import TodoForm from './components/TodoForm/TodoForm.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoCount from './components/TodoCount/TodoCount.js';
import {createComponent} from './utils/createComponent.js';
import Home from './page/Home/index.js';

export default function App({$target, initialState}) {
  Home({$target, initialState});

  // new Header({$target, text: 'Simple Todo List'});
  // new TodoForm({
  //   $target,
  //   onSubmit: text => {
  //     todoList.setState([...todoList.state, {text, isCompleted: false}]);
  //   },
  // });
  // let $todoListWrapper = createComponent('div', ' row', $target);
  // const todoList = new TodoList({
  //   $target: $todoListWrapper,
  //   initialState,
  //   onTodoChange: todos =>
  //     todoCount.setState({
  //       completedTodoCount: todos.filter(todo => todo.isCompleted === true)
  //         .length,
  //       totalTodoCount: todos.length,
  //     }),
  // });
  // let $todoCountDiv = createComponent('div', 'col-6 mx-3 bg-primary', $target);
  // const todoCount = new TodoCount({
  //   $target: $todoCountDiv,
  //   initialState: todoList.state,
  // });
}
