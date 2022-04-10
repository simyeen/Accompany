export default function Header({$target, text}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = ({isHome = false}) => {
    const $header = document.createElement('h1');
    $target.appendChild($header);
    $header.textContent = isHome ? '나는 홈' : '나는 다른 페이지';
  };
}
