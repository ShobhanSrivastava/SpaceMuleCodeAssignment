let menuElement = document.getElementById('menu');
let menuMobileElement = document.getElementById('menu-mobile');
let menuMobileListElement = document.getElementById('menu-mobile-list');

menuElement.addEventListener('click', () => {
    menuMobileElement.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

menuMobileElement.addEventListener('click', (e) => {
    console.log(e.target.tagName.toLowerCase());
    if(e.target.tagName.toLowerCase() !== 'a') {
        menuMobileElement.style.display = 'none';
        document.body.style.overflow = '';
    }
})