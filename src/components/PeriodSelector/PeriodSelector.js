export default function PeriodSelector({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $periodSelector = document.createElement('div');
    $target.appendChild($periodSelector);

    $periodSelector.innerHTML = `
    <div class="d-flex" style="flex-direction:column;width:100%">
        <div class="d-flex flex-row">
            <div class="d-flex flex-row">
                <div>기간</div>
                <a>1개월</a>
                <a>3개월</a>
                <a>6개월</a>
            </div>
            <div class='from-date' stlye='display:flex'>
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
            <div class='to-date' stlye='display:flex'>
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
    `;
  };
}
