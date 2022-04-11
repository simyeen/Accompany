import Header from './components/Header/Header.js';
import Home from './page/Home/index.js';
import Result from './page/Result/index.js';
import Write from './page/Write/index.js';
import Footbar from './components/Footbar/Footbar.js';

export default function App({$target, initialState}) {
  const $header = new Header({$target, text: '안녕 나는 헤더'});
  const $footbar = new Footbar({$target});

  const homePage = Home({$target, $header, initialState});
  const resultPage = Result({$target, $header, initialState});
  const writePage = Write({$target});

  function route() {
    let pathname = location.hash ? location.hash : '/';
    $target.innerHTML = '';

    $header.render({isHome: !location.hash});
    if (pathname === '/') {
      homePage.render();
      $footbar.render();
    } else if (pathname === '#result') {
      resultPage.render();
    } else if (pathname === '#write') {
      writePage.render();
    } else if (pathname === '/#it-board') {
    } else if (pathname === '/#welfare-board') {
    } else if (pathname === '/#qna-board') {
    }
  }

  window.addEventListener('popstate', () => {
    console.log('발생');
    route();
  });

  route();
}
