(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("mobile__link")) {
    mobileMenuRef.classList.toggle('is-open');
  }
  });
})();
