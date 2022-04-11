import {validation} from '../../utils/validation.js';

export default function Component({$target, initialState}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  this.state = initialState ?? {};

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {};

  this.render();
}
