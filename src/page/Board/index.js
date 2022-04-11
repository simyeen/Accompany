import BoardContainer from './BoardContainer.js';

export default function Board({$target, initialState}) {
  return new BoardContainer({$target, initialState});
}
