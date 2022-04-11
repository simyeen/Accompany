import ResultPresenter from './ResultPresenter.js';

export default function ResultContainer({$target, $header, initialState}) {
  return new ResultPresenter({
    $target,
    $header,
    initialState,
  });
}
