import greetModule from './greeting';

import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').textContent = greetModule.greet();
  document.querySelector('p').textContent = greetModule.greet2();
});
