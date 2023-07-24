const hamburger = document.querySelector('.nav-bar');
const navMenu = document.querySelector('.nav-links')

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('change');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
navMenu.classList.remove('show');
hamburger.classList.remove('change');
}))