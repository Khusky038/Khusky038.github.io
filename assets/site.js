document.querySelector('#year').textContent = new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
