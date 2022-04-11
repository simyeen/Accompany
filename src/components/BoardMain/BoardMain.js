export default function BoardMain({$target}) {
  this.render = () => {
    const $boardMain = document.createElement('div');
    $boardMain.className = 'col py-3';
    $target.appendChild($boardMain);

    $boardMain.innerHTML = `
    <div class='d-flex flex-row'>
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
            <div class="d-flex flex-row">
                <div>키워드</div>
                <input type="text" class="form-control">
            </div>
        </div>
        <button class="btn" type="button" id="project-search-addon" style="background-color:#04A3BB;color:white">검색</button>
        </div>
        <div class="table-responsive project-list">
            <table class="table project-table table-centered table-nowrap">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">게시일</th>
                        <th scope="col">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>New admin Design</td>
                        <td>02/5/2019</td>
                        <td>
                            <span class="text-success font-12"><i class="mdi mdi-checkbox-blank-circle mr-1"></i> Completed</span>
                        </td>
                        <td>
                            <div class="action">
                                <a href="#" class="text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Close"> <i class="fa fa-remove h5 m-0"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pt-3">
            <ul class="pagination justify-content-end mb-0">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    `;
  };

  this.render();
}
