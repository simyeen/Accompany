import BoardPresenter from './BoardPresenter.js';

export default function BoardContainer({$target}) {
  this.state = {};

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  return new BoardPresenter({
    $target,
    setState,
  });
}
