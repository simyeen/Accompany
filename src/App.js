import {createComponent} from './utils/createComponent.js';
import Home from './page/Home/index.js';

export default function App({$target, initialState}) {
  Home({$target, initialState});
  function route() {
    const {pathname} = location;
    const $container = document.querySelector('.app');

    if (pathname === '/') {
      $container.innerHTML = '<h1>Home</h1>';
    } else if (pathname === '/it-board') {
      $container.innerHTML = '<h1>it-board</h1>';
    } else if (pathname === '/welfare-board') {
      $container.innerHTML = '<h1>welfare-board</h1>';
    } else if (pathname === '/qna-board') {
      $container.innerHTML = '<h1>qna board</h1>';
    }
  }
  
  window.addEventListener('click', event => {
    if (event.target.className === 'it-button') {
      event.preventDefault();

      const {href} = event.target;
      const path = href.replace(window.location.origin, '');

      history.pushState(null, null, path);
      route();
    }
  });

  
  
  window.addEventListener('popstate', () => route());
  
  route();


}
