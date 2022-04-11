export default function BoardTitle({$target, title}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $boardTitle = document.createElement('h1');
    $boardTitle.className = 'board-title';
    $boardTitle.innerText = `${title}`;
    $target.appendChild($boardTitle);
  };

  this.render();
}
