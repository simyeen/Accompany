import HeaderPresenter from './HeaderPresenter.js';

export default function HeaderContainer({$target, $header, initialState}) {
  return new HeaderPresenter({
    $target,
    $header,
    initialState,
  });
}
