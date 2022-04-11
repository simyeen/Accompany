import {createComponent} from '../../utils/createComponent';

export default function TipBox({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $wrapper = createComponent('div', 'tipBox-wrapper', $target);
    const $tipTitle = createComponent('div', 'tip-title', $wrapper);
    const $tipContent1 = createComponent('div', 'tip-content', $wrapper);
    const $tipContent2 = createComponent('div', 'tip-content', $wrapper);
    const $tipContent3 = createComponent('div', 'tip-content', $wrapper);
  };
}
