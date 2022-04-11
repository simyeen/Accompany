import BoardSideBar from '../../components/BoardSideBar/BoardSideBar.js';
import BoardMain from '../../components/BoardMain/BoardMain.js';
import BoardTitle from '../../components/BoardTitle/BoardTitle.js';
export default function BoardPresenter({$target}) {
  this.render = ({title}) => {
    const $boardPage = document.createElement('div');
    $boardPage.className = 'board-page container-fluid row';

    const $boardTitle = new BoardTitle({$target: $boardPage, title});
    const $boardSideBar = new BoardSideBar({$target: $boardPage});
    const $boardMain = new BoardMain({$target: $boardPage});

    $target.appendChild($boardPage);
  };
}
