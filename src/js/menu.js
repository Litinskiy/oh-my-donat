(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  const bodyLock = document.querySelector('body');
  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    bodyLock.classList.toggle('is-lock');
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    bodyLock.classList.toggle('is-lock');
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("mobile__link")) {
    mobileMenuRef.classList.toggle('is-open');
    bodyLock.classList.toggle('is-lock');
  }
  });
})();
