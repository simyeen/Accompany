import Header from '../../components/Header/Header.js';
import ResultPresenter from './ResultPresenter.js';

export default function ResultContainer({$target, $header, initialState}) {
  return new ResultPresenter({
    $target,
    $header,
    initialState,
  });
}
