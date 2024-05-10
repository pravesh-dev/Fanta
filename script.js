let mobileNav = document.querySelector('#mobile-nav');
let mobileNavItems = document.querySelectorAll('#mobile-nav a');
let closeNav = document.querySelector('#close-nav');
let openNav = document.querySelector('#open-nav');

mobileNavItems.forEach(item => {
    item.addEventListener('click', (e)=>{
        mobileNavItems.forEach(elm => {
            elm.classList.remove('active-mobile-nav');
        });
        item.classList.add('active-mobile-nav');
    })
});

closeNav.addEventListener('click', (e)=>{
    mobileNav.style.left = '-100%';
});
openNav.addEventListener('click', (e)=>{
    mobileNav.style.left = '0%';
});