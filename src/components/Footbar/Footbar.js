export default function Footbar({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $footbar = document.createElement('div');
    $target.appendChild($footbar);

    $footbar.textContent = '안녕 나는 footbar야';
  };
}
