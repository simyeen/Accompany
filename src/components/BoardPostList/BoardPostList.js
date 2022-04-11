export function BoardPostList({$target}) {
  this.render = () => {
    const $boardPostList = document.createElement('div');
    $boardPostList.className = 'table-responsive project-list';
    $target.appendChild($boardPostList);
    $boardPostList.innerHTML = `
        <div class="">
        <table class="table project-table table-centered table-nowrap">
            <thead>
                <tr>
                    <th scope="col">카테고리</th>
                    <th scope="col">제목</th>
                    <th scope="col">게시일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">IT</th>
                    <td>New admin Design</td>
                    <td>02/5/2019</td>
                    <td>
                        <div class="action">
                            <a href="#" class="text-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Close"> <i class="fa fa-remove h5 m-0"></i></a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pt-3">
            <ul class="pagination justify-content-center">
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
