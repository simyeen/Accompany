import {createComponent} from '../../utils/createComponent.js';

export default function WritePresenter({
  $target,
  $header,
  initialState,
  searchKeyword,
}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }
  let options = {
    debug: 'info',
    // modules: {
    //   toolbar: '#toolbar',
    // },
    placeholder: '글을 입력해주세요.',
    theme: 'snow',
  };

  this.render = () => {
    const $wrapper = createComponent(
      'div',
      'container write-wrapper p-4',
      $target,
    );
    const $editor = createComponent('div', 'editor', $wrapper);

    const quill = new Quill('.editor', options);
  };
}

// initialState도 있어야 되는데 그냥 안넣은듯
