(() => {
  const btnOpen = document.querySelector('[data-open-button]');
  const text = document.querySelector('[data-text]');
  const btnClose = document.querySelector('[data-close-button]');
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
