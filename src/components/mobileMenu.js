
const mobileMenu = () => {
  const menu = document.getElementsByClassName('mobile-menu-wrapper')[0];
  const nav = document.getElementsByClassName('mobile-nav-wrapper')[0];
  const close = document.getElementsByClassName('mobile-menu-close')[0];
  const hero = document.getElementsByClassName('hero-content')[0];

  menu.addEventListener('click', (e) => {
    hero.style.display = 'none';
      nav.style.top = '100px';
      close.style.display = 'block';
      menu.style.display = 'none';
  })
  close.addEventListener('click', (e) => {
    hero.style.display = 'block';
    nav.style.top = '-1000px';
    close.style.display = 'none';
    menu.style.display = 'flex';
  })
}

export default mobileMenu;