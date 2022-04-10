import {createComponent} from '../../utils/createComponent.js';

export default function ResultPresenter({
  $target,
  $header,
  initialState,
  searchKeyword,
}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    console.log('result', $target);
    const $wrapper = createComponent('div', 'result-wrapper ', $target);
  };

  // this.render();
}

// initialState도 있어야 되는데 그냥 안넣은듯
