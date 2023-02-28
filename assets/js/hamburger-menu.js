let menu = false;
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', () => {
  if (menu) {
    hamburgerMenu.style.display = 'none';
    hamburger.children.icon.classList.remove('fa-xmark');
    hamburger.children.icon.classList.add('fa-bars');
    menu = false;
  } else {
    hamburgerMenu.style.display = 'block';
    hamburger.children.icon.classList.remove('fa-bars');
    hamburger.children.icon.classList.add('fa-xmark');
    menu = true;
  }
});
