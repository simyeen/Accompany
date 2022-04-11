import Header from './components/Header/Header.js';
import Home from './page/Home/index.js';
import Result from './page/Result/index.js';
import Write from './page/Write/index.js';
import Footbar from './components/Footbar/Footbar.js';
import Board from './page/Board/index.js';

export default function App({$target, initialState}) {
  // const storage = new Storage({key: 'path'});
  const $header = new Header({$target, text: '안녕 나는 헤더'});
  const $footbar = new Footbar({$target});

  const home = Home({$target, $header, initialState});
  const resultPage = Result({$target, $header, initialState});
  const boardPage = Board({$target, initialState});

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
    } else if (pathname === '#write') {
      writePage.render();
    } else if (pathname === '#it-board') {
      boardPage.render({
        title: 'IT',
        menu: {},
      });
    } else if (pathname === '#welfare-board') {
      boardPage.render({
        title: '복지',
        menu: {
          의료: ['건강검진', '단체보험', '의료비'],
          경조사: [
            '경조금',
            '상조회비 지원',
            '화환',
            '장제',
            '용품 지원',
            '상호부조 보험',
          ],
          대부: ['금융기관 대부이체'],
          양육: [
            '대학장학금',
            '자녀교육 보조비',
            '고교 학자금',
            '출산 축하',
            '장애 자녀 교육비',
          ],
          기타: ['복지포인트', '연금저축', '자기계발비', '휴양시설'],
        },
      });
    } else if (pathname === '#working-board') {
      boardPage.render({
        title: '업무',
      });
    } else if (pathname === 'qna-board') {
      boardPage.render({
        title: 'Q&A',
      });
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
