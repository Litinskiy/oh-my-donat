(() => {
  const btnOpen = document.querySelector('[open-button-about]');
  const text = document.querySelector('[text-about]');
  const btnClose = document.querySelector('[close-button-about]');
  btnOpen.addEventListener('click', () => {
    text.classList.toggle('is-hidden');
    btnOpen.classList.add('is-hidden');
    btnClose.classList.remove('is-hidden');
  });
  btnClose.addEventListener('click', () => {
    text.classList.toggle('is-hidden');
    btnOpen.classList.remove('is-hidden');
    btnClose.classList.add('is-hidden');
  });
})();
