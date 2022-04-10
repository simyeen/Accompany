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
    const $wrapper = createComponent(
      'div',
      'wrapper container border ',
      $target,
    );
    const $subWrapper1 = createComponent(
      'div',
      'subWrapper1 cotainer-fluid',
      $wrapper,
    );
    const $subWrapper2 = createComponent(
      'div',
      'subWrapper2 cotainer-fluid row',
      $wrapper,
    );
    const $mainText = createComponent('p', 'mainText', $subWrapper1);
    const $searchBox = createComponent(
      'input',
      'searchBox col-6 ',
      $subWrapper1,
    );
    const $contentList = createComponent(
      'div',
      'contentList row',
      $subWrapper1,
    );
    for (let i = 0; i < 4; i++) {
      createComponent('div', 'content col-3', $contentList);
    }
    const $community = createComponent(
      'div',
      'community container-fluid col-md-5 ',
      $subWrapper2,
    );

    const $qna = createComponent(
      'div',
      'qna container-fluid col-md-5',
      $subWrapper2,
    );
    const $div = document.createElement('div');
    $div.innerHTML = '<a class=it-button href="#result">Go Result</a>';
    $subWrapper2.appendChild($div);

    $mainText.textContent = '안녕 나는 뭐시기저시기 메인 텍스트야';
    $searchBox.textContent = '안녕 나는 검색 박스';
    $('.searchBox').on('click', searchKeyword);
  };
}
