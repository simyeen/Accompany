import {createComponent} from '../../utils/createComponent.js';
import {CATEGORIES, HEADER_INFO} from '../../common/const.js';

export default function Header({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = ({isHome = false}) => {
    const $wrapeer = createComponent(
      'div',
      'header-wrapper container-fluid m-0 p-3 row justify-content-between align-center',
      $target
    );

    const $headerLeftContainer = createComponent(
      'div',
      'headerLeftContainer col-md-4 row',
      $wrapeer
    );

    const $logo = createComponent('img', 'logo col-1', $headerLeftContainer);
    $logo.alt = '로고';
    $logo.src = '?';

    const $headerLeftContent = createComponent(
      'div',
      'headerLeftContent col ',
      $headerLeftContainer
    );

    $headerLeftContent.innerHTML = isHome
      ? `<p class=headeInfoText> ${HEADER_INFO}</p>`
      : `${CATEGORIES.map(
          c => `<div class=header-category col>${c.text}</div>`
        ).join('')}`;

    const $headerRightContainer = createComponent(
      'div',
      'headerRightContainer col row justify-content-end',
      $wrapeer
    );

    $headerRightContainer.innerHTML = `
    <div class='headerRightContent '>안녕1</div>
    <div class='headerRightContent '>안녕2</div>
    <div class='headerRightContent '>My page</div>
    <div class='headerRightContent '>안녕4</div>
    `;
  };
}
