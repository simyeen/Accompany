export default function Header({$target, text}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $header = document.createElement('h1');
    $target.appendChild($header);
    $header.textContent = text;
  };
}
