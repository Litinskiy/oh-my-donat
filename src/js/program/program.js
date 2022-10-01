(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', e => {
    mobileMenuRef.classList.remove('is-hidden');
    menuBtnRef.classList.toggle('is-hidden');
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
    menuBtnRef.classList.remove('is-hidden');
  });
})();
