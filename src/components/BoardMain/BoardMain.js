import {BoardPostList} from '../BoardPostList/BoardPostList.js';

export default function BoardMain({$target}) {
  let $boardMain = '';
  this.render = () => {
    $boardMain = document.createElement('div');
    $boardMain.className = 'board-main col py-3';
    $boardMain.style = 'min-width:950px';
    $target.appendChild($boardMain);

    $boardMain.innerHTML = `
    <div class='board-header d-flex flex-row' style='border: 1px solid #B7B7B7;border-radius: 8px;padding:16px 0 16px 16px'>
        <div class="d-flex" style="flex-direction:column;width:100%">
        <div class="d-flex flex-row" style='margin-bottom: 15px'>
            <div class="board-main-month-period d-flex flex-row" style='min-width:250px'>
                <span style='display:inline-block; margin-right:10px; min-width:50px'>기간</span>
                <a class='month-period'>1개월</a>
                <a class='month-period'>3개월</a>
                <a class='month-period'>6개월</a>
            </div>
            <div style='border:1px solid #666666; margin:0 20px;'></div>
            <div class='from-date'>
                <select name="fruit">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2020">2019</option>
                    <option value="2020">2018</option>
                </select>
                <span>년</span>
                <select name="month">
                    ${Array.from(Array(12).keys())
                      .map(
                        item => `<option value=${item + 1}>${item + 1}</option>`
                      )
                      .join('')}
                </select>
                <span>월</span>
                <select name="day">
                    ${Array.from(Array(31).keys())
                      .map(
                        item => `<option value=${item + 1}>${item + 1}</option>`
                      )
                      .join('')}
                </select>
                <span>일</span>
            </div>
            <span>~</span>
            <div class='to-date'>
            <select name="fruit">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2020">2019</option>
                <option value="2020">2018</option>
            </select>
            <span>년</span>
            <select name="month">
                ${Array.from(Array(12).keys())
                  .map(item => `<option value=${item + 1}>${item + 1}</option>`)
                  .join('')}
            </select>
            <span>월</span>
            <select name="day">
                ${Array.from(Array(31).keys())
                  .map(item => `<option value=${item + 1}>${item + 1}</option>`)
                  .join('')}
            </select>
            <span>일</span>
        </div>
        </div>
            <div class="board-main-keyword" style='display:flex;justify-contents:center'>
                <span style='display:inline-block; margin-right:10px; min-width:50px'>키워드</span>
                <input type="text" style='width:86%'>
            </div>
        </div>
        <button class="btn" type="button" id="project-search-addon" style="background-color:#04A3BB;color:white;width:80px;margin: -16px 0">검색</button>
        </div>
    `;
    new BoardPostList({$target: $boardMain});
  };

  this.render();

  $boardMain.addEventListener('click', event => {
    if (event.target.className === 'month-period') {
      if (event.target.style.backgroundColor === 'rgba(88, 88, 88, 0.77)') {
        event.target.style = 'background-color:#FFFFFF';
        event.target.style.color = 'rgba(88, 88, 88, 0.77)';
      } else {
        [...document.querySelectorAll('.month-period')].map(element => {
          element.style.backgroundColor = '#FFFFFF';
          element.style.color = 'rgba(88, 88, 88, 0.77)';
        });
        event.target.style = 'background-color:rgba(88, 88, 88, 0.77)';
        event.target.style.color = '#FFFFFF';
      }
    }
  });
}
