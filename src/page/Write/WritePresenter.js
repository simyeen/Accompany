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
    placeholder: '내용을 입력해주세요.',
    theme: 'snow',
  };

  this.render = () => {
    const $wrapper = createComponent(
      'div',
      'write-wrapper container-fluid row p-4',
      $target,
    );

    const $leftSidebar = createComponent(
      'div',
      'leftSidebar col-md-2',
      $wrapper,
    );

    const $subWrapper = createComponent(
      'div',
      'subWrapper container-container col-md-8',
      $wrapper,
    );

    const $rightSidebar = createComponent(
      'div',
      'rightSidebar col-md-2',
      $wrapper,
    );

    const $editorTtitleContainer = createComponent(
      'div',
      'editorTtitleContainer row justify-content-between border-bottom',
      $subWrapper,
    );

    const $space = createComponent(
      'div',
      'space col-md-4',
      $editorTtitleContainer,
    );

    const $editorTitle = createComponent(
      'p',
      'editorTitle col-md-4 text-center ',
      $editorTtitleContainer,
    );

    const $editorButtonBox = createComponent(
      'div',
      'editorButtonBox px-1 col-md-4 text-center row',
      $editorTtitleContainer,
    );

    const $editorButton1 = createComponent(
      'button',
      'editorButton col mx-2',
      $editorButtonBox,
    );

    const $editorButton2 = createComponent(
      'button',
      'editorButton col',
      $editorButtonBox,
    );

    const $selectContainer = createComponent(
      'div',
      'selectContainer row border-bottom',
      $subWrapper,
    );

    const $selectTitle = createComponent(
      'p',
      'selectTitle col-2',
      $selectContainer,
    );
    const $selectDropdown = createComponent(
      'div',
      'selectDropdown col',
      $selectContainer,
    );

    const $titleContainer = createComponent(
      'div',
      'titleContainer row justify-content-between border-bottom',
      $subWrapper,
    );

    const $title = createComponent('p', 'myTitle col-2', $titleContainer);
    const $titleInput = createComponent(
      'input',
      'titleInput col',
      $titleContainer,
    );

    const $editorContainer = createComponent(
      'div',
      'editorContainer p-4 mb-5',
      $subWrapper,
    );

    const $editor = createComponent('div', 'editor', $editorContainer);
    const quill = new Quill('.editor', options);

    const $tagContainer = createComponent(
      'div',
      'tagContainer row justify-content-between border-bottom mb-4',
      $subWrapper,
    );

    const $tagTitle = createComponent('p', 'tagTitle col', $tagContainer);
    const $tagInput = createComponent('input', 'tagInput col', $tagContainer);
    const $tagAddButton = createComponent(
      'button',
      'tagAddButton col',
      $tagContainer,
    );

    const $writeSubmitButtonContainer = createComponent(
      'div',
      'writeSubmitButtonContainer text-center',
      $subWrapper,
    );

    const $writeSubmitButton = createComponent(
      'button',
      'writeSubmitButton',
      $writeSubmitButtonContainer,
    );

    $editorTitle.textContent = '질문 등록';
    $editorButton1.textContent = '임시저장';
    $editorButton2.textContent = '작성 취소';

    $selectTitle.textContent = '문의유형';
    $selectDropdown.textContent = '선택해주세요';

    $title.textContent = '제목';
    $titleInput.placeholder = '제목을 입력해주세요.';

    $tagTitle.textContent = '태그';
    $tagInput.placeholder = '# 질문에 맞는 태그를 입력해주세요 (최대 5개)';
    $tagAddButton.textContent = '추가';

    $writeSubmitButton.textContent = '올리기';
  };
}

// initialState도 있어야 되는데 그냥 안넣은듯
