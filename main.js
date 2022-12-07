const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-Menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')

}

