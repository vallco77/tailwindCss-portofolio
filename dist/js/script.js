
// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;
  const toTop =document.querySelector('#to-top');

  if(window.pageYOffset>fixNav){
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  }else{
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
  
});


// click diluar hamburger
window.addEventListener('click', function(e){
  if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode toggle
const darkMode =document.querySelector('#dark-mode-toggle');
const html=document.querySelector('html');

darkMode.addEventListener('click',function(){
  if(darkMode.checked){
    html.classList.add('dark');
    localStorage.theme='dark';
  }else{
    html.classList.remove('dark');
    localStorage.theme='light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkMode.checked=true;
} else {
  darkMode.checked=false;
};

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
};