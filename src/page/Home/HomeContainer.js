import HomePresenter from './HomePresenter.js';

export default function HomeContainer({$target, $header, initialState}) {
  const setState = () => {
    console.log('대충 바꿔줄 state들');
  };

  const searchKeyword = () => {
    console.log('검색함수실행');
  };

  return new HomePresenter({
    $target,
    $header,
    initialState,
    searchKeyword,
    setState,
  });
}
