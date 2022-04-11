import {createComponent} from '../../utils/createComponent.js';
import Padding from '../Padding/Padding.js';

export default function SearchBar({$target}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.render = () => {
    const $searchBar = createComponent(
      'div',
      'searchBar col-xl-4 col-md-6 col-sm-8',
      $target
    );
    const $searchContainer = createComponent(
      'div',
      'searchContainer',
      $searchBar
    );
    const $searchImg = createComponent(
      'img',
      'searchImg d-none d-md-block ',
      $searchContainer
    );
    $searchImg.alt = '돋보기';

    const $searchInputContainer = createComponent(
      'div',
      'searchInputContainer',
      $searchContainer
    );

    const $searchInput = createComponent(
      'input',
      'searchInput ',
      $searchInputContainer
    );
    $searchInput.placeholder = '무엇이 궁금하신가요?';
    const $space = createComponent(
      'div',
      'space d-none d-sm-block',
      $searchInputContainer
    );

    const $padding = new Padding({$target: $searchBar});
  };

  this.render();
}
