const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');
const lightBulb = document.querySelector('#bulb');
const boxBulb = document.querySelector('#bulb-box');

navBtn.addEventListener('click', () => {
    const isExpanded = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
})

lightBulb.addEventListener('click', () => {
  boxBulb.classList.toggle('hidden');
});

