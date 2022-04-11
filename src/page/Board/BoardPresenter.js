import BoardSideBar from '../../components/BoardSideBar/BoardSideBar.js';
import BoardMain from '../../components/BoardMain/BoardMain.js';
import BoardTitle from '../../components/BoardTitle/BoardTitle.js';
import BoardRightBar from '../../components/BoardRightBar/BoardRightBar.js';
export default function BoardPresenter({$target}) {
  this.render = ({data}) => {
    const {title, menu} = data;

    const $boardWrapper = document.createElement('div');
    $boardWrapper.className = 'board-wrapper flex-row';
    const $boardTitle = new BoardTitle({
      $target: $boardWrapper,
      title,
    });

    const $boardPage = document.createElement('div');
    $boardPage.className = 'board-page row';

    const $boardSideBar = new BoardSideBar({$target: $boardPage, menu});
    const $boardMain = new BoardMain({$target: $boardPage});

    $boardWrapper.appendChild($boardPage);

    const $boardRightBar = new BoardRightBar({$target: $boardPage});

    $target.appendChild($boardWrapper);
  };
}
