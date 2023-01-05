const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.addEventListener('click', ()=>{
    document.querySelector('.toggle-button.active').classList.remove('active');
    document.querySelector('.menu.active').classList.remove('active');
})

window.addEventListener('scroll', function(){
    const nav = document.querySelector('.navigation');

    if (window.scrollY > 0) {
        nav.classList.add('scroll');
      } else {
        nav.classList.remove('scroll');
      }
});


