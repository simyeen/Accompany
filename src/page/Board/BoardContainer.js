import BoardPresenter from './BoardPresenter.js';

export default function BoardContainer({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.state = {};

  this.setState = nextState => {
    this.state = nextState;
  };

  return new BoardPresenter({
    $target,
    setState: this.setState,
  });
}
