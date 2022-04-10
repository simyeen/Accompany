export default function Storage({key}) {
  this.key = String(key);

  this.getItem = () => {
    const item = JSON.parse(localStorage.getItem(this.key));

    if (item) {
      return item;
    } else {
      return null;
    }
  };

  this.setItem = value => {
    localStorage.setItem(this.key, JSON.stringify(value));
  };
}
