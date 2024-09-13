const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item a');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

function closeMenu() {
    navMenu.classList.remove('ativo');
}
navItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});
