import { greet } from './greeting.js';

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector('h1').textContent = greet();

})
