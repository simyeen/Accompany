import {createComponent} from '../../utils/createComponent.js';

export default function ResultPresenter({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  const keyword = '연금저축';
  const mockArr = ['변경 기간', '금융 기관', '증빙 서류', '계좌변경 신청'];

  this.render = () => {
    const $wrapper = createComponent('div', 'result-wrapper p-3', $target);
    const $subWrapper = createComponent(
      'div',
      'container p-2 col-10',
      $wrapper,
    );
    const $resultHeader = createComponent(
      'h2',
      'resultHeader text-center',
      $subWrapper,
    );
    const $resultContainer = createComponent(
      'div',
      'resultContainer row border',
      $subWrapper,
    );

    const $resultMainBox = createComponent(
      'div',
      'resultMainBox col-8 g-0 border',
      $resultContainer,
    );
    const $resultSideBox = createComponent(
      'div',
      'resultSideBox col-4 g-0 px-4 border',
      $resultContainer,
    );

    const $sidebarKeywordBox = createComponent(
      'div',
      'sidebarKeywordBox border-bottom',
      $resultSideBox,
    );

    const $siderbarKeywordTitle = createComponent(
      'p',
      'siderbarKeywordTitle',
      $sidebarKeywordBox,
    );

    const $siderbarKeywordContent = createComponent(
      'div',
      'siderbarKeywordContent',
      $sidebarKeywordBox,
    );

    const $sidebarRelatedBox = createComponent(
      'div',
      'sidebarRelatedBox border-bottom',
      $resultSideBox,
    );

    const $siderbarRelatedTitle = createComponent(
      'p',
      'siderbarRelatedTitle',
      $sidebarRelatedBox,
    );

    const $siderbarRelatedContent = createComponent(
      'div',
      'siderbarRelatedContent',
      $sidebarRelatedBox,
    );

    const $sidebarPdfBox = createComponent(
      'div',
      'sidebarPdfBox border-bottom',
      $resultSideBox,
    );

    const $siderbarPdfTitle = createComponent(
      'p',
      'siderbarPdfTitle',
      $sidebarPdfBox,
    );

    const $siderbarPdfContent = createComponent(
      'div',
      'siderbarPdfContent',
      $sidebarPdfBox,
    );

    const $mainBoxInfo = createComponent(
      'div',
      'mainBoxInfo border-bottom',
      $resultMainBox,
    );

    const $subMainBox = createComponent(
      'div',
      'subMainBox px-4',
      $resultMainBox,
    );

    const $subMainDicTitle = createComponent(
      'div',
      'subMainBoxTitle border-bottom',
      $subMainBox,
    );
    const $subMainDicContent = createComponent(
      'div',
      'subMainDicContent border-bottom',
      $subMainBox,
    );
    const $subMainQnaTitle = createComponent(
      'div',
      'subMainQnaTitle border-bottom',
      $subMainBox,
    );
    const $subMainQnaContent = createComponent(
      'div',
      'subMainQnaContent border-bottom',
      $subMainBox,
    );

    $resultHeader.textContent = '검색 결과';
    $mainBoxInfo.innerHTML = '<span><b>연금저축</b></span>에 대한 결과입니다.';
    $subMainDicTitle.innerHTML = '백과(1/1)';
    $subMainDicContent.innerHTML = '[ERP] ';
    $subMainQnaTitle.innerHTML = 'Q&A / 커뮤니티';
    $subMainQnaContent.innerHTML = '최신순 추천순';

    $siderbarKeywordTitle.textContent = '연관검색어';
    $siderbarKeywordContent.innerHTML = '연금저축 변경 기간';
    $siderbarKeywordContent.innerHTML = `${mockArr
      .map(el => `<div>${el}</div>`)
      .join('')}`;

    $siderbarRelatedTitle.textContent = '관련태그';
    $siderbarRelatedContent.innerHTML = '#복지후생';

    $siderbarPdfTitle.textContent = '관련 PDF';
    $siderbarPdfContent.innerHTML = '<li>연금저축 금융기관 변경_Q&A.pdf</li>';
  };
}
