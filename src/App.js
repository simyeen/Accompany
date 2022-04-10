import Header from './components/Header/Header.js';
import Home from './page/Home/index.js';
import Result from './page/Result/index.js';
import Write from './page/Write/index.js';
import Footbar from './components/Footbar/Footbar.js';

export default function App({$target, initialState}) {
  // const storage = new Storage({key: 'path'});
  const $header = new Header({$target, text: '안녕 나는 헤더'});
  const $footbar = new Footbar({$target});

  const home = Home({$target, $header, initialState});
  const resultPage = Result({$target, $header, initialState});
  const writePage = Write({$target});

  function route() {
    // let pathname = storage.getItem() ? storage.getItem() : '/';
    // Storage 만들기는 했는데 여기선 필요 없을듯.

    let pathname = location.hash ? location.hash : '/';
    console.log(pathname);
    $target.innerHTML = '';

    $header.render({isHome: !location.hash});
    if (pathname === '/') {
      home.render();
      $footbar.render();
    } else if (pathname === '#result') {
      // console.log('result 페이지 렌더링', isHome);
      resultPage.render();
    } else if (pathname === '#write') {
      writePage.render();
    } else if (pathname === '/#it-board') {
    } else if (pathname === '/#welfare-board') {
    } else if (pathname === '/#qna-board') {
    }
  }

  //아래 코드 없어도 정상작동.

  // window.addEventListener('click', event => {
  //   if (event.target.className === 'it-button') {
  //     event.preventDefault();
  //     const {href} = event.target;
  //     const path = href.replace(window.location.origin, '');
  //     history.pushState(null, null, path);
  //     console.log(history);
  //     route();
  //   }
  // });

  window.addEventListener('popstate', () => {
    console.log('발생');
    route();
  });

  route();
}
