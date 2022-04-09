import Home from './page/Home/index.js';
import Board from './page/Board/index.js';
import Header from './components/Header/Header.js';
export default function App({$target, initialState}) {
  const $header = new Header({$target, text: '안녕 나는 헤더'});

  const home = Home({$target, $header, initialState});
  // Board({$target, initialState});

  function route() {
    const {pathname} = location;
    const $container = document.querySelector('.app');

    if (pathname === '/') {
      home.render();
    } else if (pathname === '/it-board') {
    } else if (pathname === '/welfare-board') {
    } else if (pathname === '/qna-board') {
    }
  }

  window.addEventListener('click', event => {
    if (event.target.className === 'it-button') {
      event.preventDefault();

      const {href} = event.target;
      const path = href.replace(window.location.origin, '');

      history.pushState(null, null, path);
      route();
    }
  });

  window.addEventListener('popstate', () => route());

  route();
}
