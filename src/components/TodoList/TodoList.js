import {validation} from '../../utils/validation.js';

export default function TodoList({$target, initialState, onTodoChange}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  const $todoList = document.createElement('div');
  $target.appendChild($todoList);

  this.state = initialState ?? [];

  this.setState = nextState => {
    validation(nextState);
    this.state = nextState;
    onTodoChange(this.state);
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
            <ul class=todoList>
                ${this.state.map((todo, index) => {
                  const textDecoration = todo.isCompleted
                    ? 'line-through'
                    : 'none';
                  return `<li style='text-decoration:${textDecoration};cursor:pointer' class=${index} value=${todo.isCompleted}>${todo.text}<button value='삭제' class='button btn-success'>삭제</button></li>`;
                })}
            </ul>`;

    const $list = document.querySelector('ul');

    $list.addEventListener('click', ({target}) => {
      if (target.matches('.todoList > li')) {
        this.state[Number(target.className)].isCompleted =
          !this.state[Number(target.className)].isCompleted;
        this.setState(this.state);
      }

      if (target.matches('.todoList > li > button')) {
        this.setState(
          this.state.filter(
            (todo, index) => index !== Number(target.parentNode.className),
          ),
        );
      }
    });
  };
  this.render();
}
