import {createComponent} from '../../utils/createComponent.js';

export default function Padding({$target, h = 16}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $padding = createComponent('div', `StyledPadding`, $target);
    $(`.StyledPadding`).css({height: `${h}px`});
  };

  this.render();
}
