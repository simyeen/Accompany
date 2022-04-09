export const createComponent = (tag, className, $target) => {
  console.log('부모는', $target);

  let $newTarget = document.createElement(tag);
  $newTarget.className = className;
  $target.appendChild($newTarget);

  return $newTarget;
};
