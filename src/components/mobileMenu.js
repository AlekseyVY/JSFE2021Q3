
const mobileMenu = () => {
  const menu = document.getElementsByClassName('mobile-menu-wrapper')[0];
  const nav = document.getElementsByClassName('mobile-nav-wrapper')[0];
  const close = document.getElementsByClassName('mobile-menu-close')[0];

  menu.addEventListener('click', (e) => {
      nav.style.top = '130px';
      close.style.display = 'block';
      menu.style.display = 'none';
  })
  close.addEventListener('click', (e) => {
    nav.style.top = '-700px';
    close.style.display = 'none';
    menu.style.display = 'flex';
  })
}

export default mobileMenu;