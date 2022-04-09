import App from "./App.js";

const $app = document.querySelector(".app");

// 데이터 주입
new App({
  $target: $app,
  initialState: [],
});
