document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.first-line-left').classList.add('vidible');
    document.querySelector('.header').classList.add('header-visible');
    document.querySelector('.navigation ul').classList.add('navigation-flex')
})