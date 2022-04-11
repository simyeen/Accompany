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
      'wrapper p-3 container-fluid border justify-content-center',
      $target,
    );
    const $subWrapper1 = createComponent(
      'div',
      'subWrapper1 row cotainer-fluid justify-content-center',
      $wrapper,
    );

    const $mainText = createComponent(
      'p',
      'mainText text-center',
      $subWrapper1,
    );
    const $searchBox = createComponent(
      'input',
      'searchBox col-6 ',
      $subWrapper1,
    );
    const $contentList = createComponent(
      'div',
      'contentList row justify-content-center',
      $subWrapper1,
    );
    $contentList.innerHTML = categroise
      .map(
        c => `<div class='category col-3'>
      <a class='url col-2'; href=${c.url}>${c.text}<a> 
      </div>`,
      )
      .join('');

    const $subWrapper2 = createComponent(
      'div',
      'subWrapper2 cotainer-fluid mt-5 row justify-content-center',
      $wrapper,
    );
    const $commnityContainer = createComponent(
      'div',
      'container commnity my-1 col-sm-5 justify-content-center',
      $subWrapper2,
    );

    const $commnityContainerTitle = createComponent(
      'p',
      'commnityContainerTitle text-center',
      $commnityContainer,
    );

    const $commnityBox = createComponent(
      'div',
      'box commnityBox',
      $commnityContainer,
    );

    const $qnaContainer = createComponent(
      'div',
      'container qna my-1 col-sm-5 justify-content-center',
      $subWrapper2,
    );

    const $qnaContainerTitle = createComponent(
      'p',
      'qnaContainerTitle text-center',
      $qnaContainer,
    );

    const $qnaBox = createComponent('div', 'box qnaBox', $qnaContainer);

    const $div = document.createElement('div');
    $div.innerHTML = '<a class=it-button href="#result">Go Result</a>';
    $subWrapper2.appendChild($div);

    const $div2 = document.createElement('div');
    $div2.innerHTML = '<a class=it-button href="#write">Go Write</a>';
    $subWrapper2.appendChild($div2);

    $mainText.innerHTML = '안녕 나는 뭐시기저시기 <br/> 메인 텍스트야';
    $searchBox.textContent = '안녕 나는 검색 박스';
    $commnityContainerTitle.textContent = '커뮤니티';
    $qnaContainerTitle.textContent = '해결해주세요';

    $('.searchBox').on('click', searchKeyword);
  };
}
