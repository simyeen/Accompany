import {createComponent} from '../../utils/createComponent.js';

export default function HomePresenter({
  $target,
  $header,
  initialState,
  searchKeyword,
}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    $header.render();
    const $wrapper = createComponent(
      'div',
      'wrapper container border ',
      $target,
    );
    const $mainText = createComponent('p', 'mainText', $wrapper);
    const $searchBox = createComponent('input', 'searchBox  col-6 ', $wrapper);
    const $contentList = createComponent('div', 'contentList row', $wrapper);
    for (let i = 0; i < 4; i++) {
      createComponent('div', 'content col-3', $contentList);
    }
    // $wrapper.textContent = `하이`;
    $mainText.textContent = '안녕 나는 뭐시기저시기 메인 텍스트야';
    $searchBox.textContent = '안녕 나는 검색 박스';

    $searchBox.addEventListener('click', function () {
      searchKeyword();
    });
  };
}

// initialState도 있어야 되는데 그냥 안넣은듯
