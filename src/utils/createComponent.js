export const createComponent = (tag, className, $target) => {
  let $newTarget = document.createElement(tag);
  $newTarget.className = className;
  $target.appendChild($newTarget);

  return $newTarget;
};
