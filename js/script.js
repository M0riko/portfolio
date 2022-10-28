const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skill__raiting_counter'),
    lines = document.querySelectorAll('.skill__raiting_line span')

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
 const test = document.querySelector('.resume__column-title')
test.addEventListener('click', ()=>{
    setTimeout(()=>{
    alert('Вы точно хотите что то знать про образование?')
    },5000)
})