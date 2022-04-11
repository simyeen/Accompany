export default function BoardSideBar({$target, menu}) {
  let $boardSideBar;
  let openSubMenu = false;
  this.render = () => {
    const {IT} = menu;
    $boardSideBar = document.createElement('div');
    $boardSideBar.className = 'boardSideBar col-auto col-md-3 col-xl-2 px-0';
    $target.appendChild($boardSideBar);

    const $boardSideBarList = document.createElement('ul');

    $boardSideBarList.className = `board-side-bar-list nav nav-pills flex-column mx-auto align-items-center align-items-sm-start`;

    for (const key of Object.keys(IT)) {
      const listItemData = IT[key];

      if (Array.isArray(listItemData)) {
        const $listItem = document.createElement('li');
        $boardSideBarList.appendChild($listItem);
        $listItem.className = `board-side-bar-list-item`;
        $listItem.style = `min-width:100px;`;

        $listItem.innerHTML = `
                <div style='display:flex;justify-content:space-between'>
                    <span class="ms-1 d-none d-sm-inline" style='cursor:pointer;'>${key}</span>
                    <svg class='triangle-btn' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="board-side-bar-list-item-triangle bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
                <div class='drop-content' style="display:none" id="drop-content">
                    ${listItemData
                      .map(
                        element =>
                          `<p hreaf="#" style='padding-left:15px'>${element}</p>`
                      )
                      .join('')}
                </div>
            `;
      }
    }

    $boardSideBar.innerHTML = `
        <div class="d-flex flex-column align-items-center align-items-sm-start" style='height:100%'>
            <div class="board-qna-box nav nav-pills flex-column mx-auto">
                <div class='board-qna text-center py-3'>Q & A</div>
            </div>
            <div class="nav nav-pills flex-column mx-auto">
                <p class='board-info-title text-center m-0 p-3'>${IT.title}</p>
                ${$boardSideBarList.innerHTML}
                </div>
        </div>`;
  };
  this.render();

  $boardSideBar.addEventListener(
    'click',
    event => {
      event.target.closest('li').querySelector(':scope > .drop-content').style =
        'display:block';
    },
    true
  );
}
