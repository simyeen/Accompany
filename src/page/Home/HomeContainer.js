import Header from '../../components/Header/Header.js';
import HomePresenter from './HomePresenter.js';

export default function HomeContainer({$target, $header, initialState}) {
  // 이곳에서 필요한 함수 작성
  // useState가 필요하면 여기서 함수작성하고
  // Presenter에서 this.state 작성

  const setState = () => {
    console.log('대충 바꿔줄 state들');
  };

  const searchKeyword = () => {
    console.log('검색함수실행');
  };

  const useEffect = () => {};

  useEffect();

  return new HomePresenter({
    $target,
    $header,
    initialState,
    searchKeyword,
    setState,
  });
}