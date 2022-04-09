import Header from './components/Header/Header.js';
import TodoForm from './components/TodoForm/TodoForm.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoCount from './components/TodoCount/TodoCount.js';
import HomePage from './components/pages/Home/HomePage.js';

export default function App({$target, initialState}) {
  function route() {
    const {pathname} = location;
    const $container = document.querySelector('.app');

    if (pathname === '/') {
      $container.innerHTML = '<h1>Home</h1>';
    } else if (pathname === '/it-board') {
      $container.innerHTML = '<h1>it-board</h1>';
    } else if (pathname === '/welfare-board') {
      $container.innerHTML = '<h1>welfare-board</h1>';
    } else if (pathname === '/qna-board') {
      $container.innerHTML = '<h1>qna board</h1>';
    }
  }

  window.addEventListener('popstate', () => route());

  new HomePage({
    $target,
    header: new Header({$target, text: 'Simple Todo List'}),
  });

  new TodoForm({
    $target,
    onSubmit: text => {
      todoList.setState([...todoList.state, {text, isCompleted: false}]);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
    onTodoChange: todos =>
      todoCount.setState({
        completedTodoCount: todos.filter(todo => todo.isCompleted === true)
          .length,
        totalTodoCount: todos.length,
      }),
  });

  const todoCount = new TodoCount({
    $target,
    initialState: todoList.state,
  });

  window.addEventListener('click', event => {
    if (event.target.className === 'it-button') {
      event.preventDefault();

      const {href} = event.target;
      const path = href.replace(window.location.origin, '');

      history.pushState(null, null, path);
      route();
    }
  });

  route();
}
