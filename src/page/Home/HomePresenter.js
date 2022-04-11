import {CUMMUNITIES} from '../../common/const.js';
import Padding from '../../components/Padding/Padding.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
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

  const categroise = [
    {text: 'IT', url: '#it-board'},
    {text: '복지', url: '#welfare-board'},
    {text: '업무', url: '#working-board'},
    {text: 'Q&A', url: '#qna-board'},
  ];

  this.render = () => {
    const $wrapper = createComponent(
      'div',
      'wrapper p-3 pb-0 container-fluid border justify-content-center',
      $target
    );

    const $subWrapper1 = createComponent(
      'div',
      'subWrapper1 row cotainer-fluid justify-content-center',
      $wrapper
    );

    const $mainText = createComponent(
      'p',
      'mainText text-center ',
      $subWrapper1
    );

    const $subText = createComponent('p', 'subText text-center', $subWrapper1);

    const $searchBar = new SearchBar({$target: $subWrapper1});

    const $subContentWrapper = createComponent(
      'div',
      'subContentWrapper',
      $wrapper
    );

    const $contentList = createComponent(
      'div',
      'contentList col-md-4',
      $subContentWrapper
    );

    // 이벤트 위임 필요.
    $contentList.innerHTML = categroise
      .map(
        c => `<button class='homeCategory col-3 m-1'>
        <a class='url'; href=${c.url}>${c.text}<a> 
      </button>`
      )
      .join('');

    const $subWrapper2 = createComponent(
      'div',
      'subWrapper2 cotainer-fluid mt-5 row justify-content-center',
      $wrapper
    );
    const $commnityContainer = createComponent(
      'div',
      'container commnity my-1 col-md-4 col-sm-5 justify-content-center',
      $subWrapper2
    );

    const $commnityBox = createComponent(
      'div',
      'box commnityBox',
      $commnityContainer
    );

    const $commnityBoxTitle = createComponent(
      'p',
      'homeTitle commnityBoxTitle text-center',
      $commnityBox
    );

    const $commnityBoxContent = createComponent(
      'div',
      'homeBox commnityBoxContent',
      $commnityBox
    );

    $commnityBoxContent.innerHTML = `${CUMMUNITIES.map(
      c => `<div class='homeContent'>${c.text}</div>`
    ).join('')}`;

    const $qnaContainer = createComponent(
      'div',
      'container qna my-1 col-md-4 col-sm-5 justify-content-center',
      $subWrapper2
    );

    const $qnaBox = createComponent('div', 'box qnaBox', $qnaContainer);

    const $qnaBoxTitle = createComponent(
      'p',
      'homeTitle qnaBoxTitle text-center',
      $qnaBox
    );

    const $qnaBoxContent = createComponent(
      'div',
      'homeBox qnaBoxContent',
      $qnaBox
    );

    $qnaBoxContent.innerHTML = `${CUMMUNITIES.map(
      c => `<div class='homeContent'>${c.text}</div>`
    ).join('')}`;

    const $div = document.createElement('div');
    const $div2 = document.createElement('div');

    $div.innerHTML = '<a class=it-button href="#result">Go Result</a>';
    $subWrapper2.appendChild($div);

    $div2.innerHTML = '<a class=it-button href="#write">Go Write</a>';
    $subWrapper2.appendChild($div2);

    $mainText.innerHTML = '매일 성장하고 <br/> 더 멋진 KT인 되기!';
    $subText.textContent = '언제나 궁금한 점들은 Accompany에게 물어보세요.';

    $commnityBoxTitle.textContent = '커뮤니티';
    $qnaBoxTitle.textContent = '해결해주세요';

    // $('.searchBar').on('click', searchKeyword);
  };
}
