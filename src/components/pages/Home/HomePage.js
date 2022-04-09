export default function HomePage({$target}) {
  const $home = document.createElement('div');

  this.state = {};

  const $HomePage = document.createElement('div');
  $target.appendChild($HomePage);

  this.setState = nextState => {};

  this.render = () => {
    $HomePage.innerHTML = `
      <div> 
          <a class='it-button' href="/IT-info">IT</a>
      </div>
      `;
  };

  this.render();
}
