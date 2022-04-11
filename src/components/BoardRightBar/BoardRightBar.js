export default function BoardRightBar({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $rightBar = document.createElement('div');
    $rightBar.className = 'board-right-bar';
    $rightBar.innerHTML = `
      <div>
        <div>
          <div>인기검색 순위</div>
          <ul>
            <li>대부신청</li>
            <li>연금저축</li>
            <li>복지포인트</li>
            <li>의료비 자동신청</li>
          </ul>
        </div>
      </div>
      <div>
      <div>
        <div>!! 자주 찾는 질문</div>
        <ul>
          <li>대부신청</li>
          <li>연금저축</li>
          <li>복지포인트</li>
          <li>의료비 자동신청</li>
        </ul>
      </div>
    </div>
    `;

    $target.appendChild($rightBar);
  };

  this.render();
}
