export default function TodoForm({$target, onSubmit}) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요!');
  }

  const $form = document.createElement('form');

  $target.appendChild($form);
  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>
        `;
    // render 실행 마다 addEventListener 할당 방지 목적
    if (!isInit) {
      $form.addEventListener('submit', e => {
        e.preventDefault();
        const $todo = $form.querySelector('input[name=todo]');
        const text = $todo.value;

        if (text.length) {
          $todo.value = '';
          onSubmit(text);
        }
      });
    }
  };

  this.render();
}
