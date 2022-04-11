import Header from './components/Header/Header.js';
import Home from './page/Home/index.js';
import Result from './page/Result/index.js';
import Write from './page/Write/index.js';
import Footbar from './components/Footbar/Footbar.js';
import Board from './page/Board/index.js';

export default function App({$target, initialState}) {
  const $header = new Header({$target, text: '안녕 나는 헤더'});
  const $footbar = new Footbar({$target});

  const homePage = Home({$target, $header, initialState});
  const resultPage = Result({$target, $header, initialState});
  const boardPage = Board({$target, initialState});

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
    } else if (pathname === '#it-board') {
      boardPage.render({
        data: {
          title: 'IT',
          menu: {
            IT: {
              title: '카테고리',
              업무시스템: [
                '메일',
                'TEAMS',
                '메신저',
                'KOS',
                'ICIS',
                'KT-WORKS 가이드',
              ],
              'PC OA': [
                'PC 설정',
                '네트워크 설정',
                '윈도우',
                'IE',
                '오피스',
                '복합기',
              ],
              '임직원 기기': ['VDI', 'PC', '모바일'],
              '필수보안 S/W': [
                'DLP',
                'DRM',
                'V3',
                'APC',
                'PC 워터마크',
                'Privacy-l',
                '사내 접근제어',
              ],
            },
          },
        },
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

  window.addEventListener('popstate', () => {
    console.log('발생');
    route();
  });

  route();
}
