import {validation} from '../../utils/validation.js';

export default function TodoCount({$target, initialState}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.state = {
    completedTodoCount: 0,
    totalTodoCount: 0,
  };

  const $todoCount = document.createElement('div');
  $target.appendChild($todoCount);

  this.setState = nextState => {
    validation(nextState);
    this.state = nextState;
    this.render();
  };

  this.render = () =>
    ($todoCount.innerHTML = `<p>완료된 Todo의 갯수: ${this.state.completedTodoCount}</p><p>전체 Todo의 갯수: ${this.state.totalTodoCount}</p>`);

  this.render();
}

// 도야 되는데 그냥 안넣은듯
