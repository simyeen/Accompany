export default function BoardSideBar({$target, title}) {
  this.render = () => {
    const $boardSideBar = document.createElement('div');
    $boardSideBar.className = 'boardSideBar col-auto col-md-3 col-xl-2 px-0';
    $target.appendChild($boardSideBar);
    $boardSideBar.innerHTML = `
    <div class="d-flex flex-column align-items-center align-items-sm-start" style='height:100%'>
        <div class="board-qna-box nav nav-pills flex-column mx-auto">
            <div class='board-qna text-center py-3'>Q & A</div>
        </div>
        <div class="nav nav-pills flex-column mx-auto">
            <p class='board-info-title text-center m-0 p-3'>제도안내</p>
        </div>
        <ul class="nav nav-pills flex-column mx-auto align-items-center align-items-sm-start" id="menu">
            <li class='board-side-bar-list-item' style='min-width:100px;display:flex;justify-content:space-between'>
                <span class="ms-1 d-none d-sm-inline">의료</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="board-side-bar-list-item-triangle bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </li>
            <li class='board-side-bar-list-item' style='min-width:100px;display:flex;justify-content:space-between'>
                <span class="ms-1 d-none d-sm-inline">복지</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="board-side-bar-list-item-triangle bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </li>
            <li class='board-side-bar-list-item' style='min-width:100px;display:flex;justify-content:space-between'>
                <span class="ms-1 d-none d-sm-inline">자녀양육</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="board-side-bar-list-item-triangle bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </li>
            <li class='board-side-bar-list-item' style='min-width:100px;display:flex;justify-content:space-between'>
            <span class="ms-1 d-none d-sm-inline">기타</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="board-side-bar-list-item-triangle bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
        </li>
        </ul>

        </div>
    `;
  };

  this.render();
}
